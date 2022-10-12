import { addHttps } from "./";
import * as CryptoJS from "../libraries/crypto-js.min.js";

async function getContentFromAccount(web3, publicKey) {
  const connection = new web3.Connection(web3.clusterApiUrl("mainnet-beta"));
  const nameAccount = await connection.getAccountInfo(publicKey, "processed");
  const data = nameAccount.data.toString("ascii").slice(96).replace(/\0/g, "");
  return data;
}

function getHashedName(name) {
  const HASH_PREFIX = "SPL Name Service";
  const input = HASH_PREFIX + name;
  const fromHexString = (hexString) =>
    new Uint8Array(
      hexString.match(/.{1,2}/g).map((byte) => parseInt(byte, 16))
    );
  const hashed_name = fromHexString(CryptoJS.SHA256(input).toString());
  return hashed_name;
}

async function getNameAccountKey(web3, hashed_name, nameClass, nameParent) {
  const seeds = [hashed_name];
  if (nameClass) {
    seeds.push(nameClass.toBuffer());
  } else {
    seeds.push(new Uint8Array(32));
  }
  if (nameParent) {
    seeds.push(nameParent.toBuffer());
  } else {
    seeds.push(new Uint8Array(32));
  }
  const NAME_PROGRAM_ID = new web3.PublicKey(
    "namesLPneVptA9Z5rqUDD9tMTWEJwofgaYwp8cawRkX"
  );
  const [nameAccountKey] = await web3.PublicKey.findProgramAddress(
    seeds,
    NAME_PROGRAM_ID
  );
  return nameAccountKey;
}

async function getDomainKey(web3, name) {
  const SOL_TLD_AUTHORITY = new web3.PublicKey(
    "58PwtjSDuFHuUkYjH9BYnnQKHfwo9reZhC2zMJv9JPkx"
  );
  const hashedName = getHashedName(name);
  const domainKey = await getNameAccountKey(
    web3,
    hashedName,
    undefined,
    SOL_TLD_AUTHORITY
  );
  return domainKey;
}

async function getSubdomainKey(parentDomainKey, subdomain) {
  const hashedName = getHashedName("\0".concat(subdomain));
  const subdomainAccount = await getNameAccountKey(
    hashedName,
    undefined,
    parentDomainKey
  );
  return subdomainAccount;
}

const handleSolRedirect = async ({ web3, urlParsed, hostnameArray, name }) => {
  const urlFull =
    (hostnameArray.length === 3 ? hostnameArray[0] + "." : "") + name + ".sol";
  const pathWithQuery = urlParsed.pathname + urlParsed.search;
  // document.getElementById("display").textContent = nameFull;
  debugger;
  try {
    let domainKey = await getDomainKey(web3, name);
    let accountKey = domainKey;
    if (hostnameArray.length === 3) {
      // Check if there's a subdomain in the input and set accountKey if so
      accountKey = await getSubdomainKey(domainKey, hostnameArray[0]);
    }
    const data = await getContentFromAccount(web3, accountKey);

    const ipfsPrefix = "ipfs=";
    const ipAddressRegex =
      /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

    if (data.startsWith(ipfsPrefix)) {
      const cid = data.slice(ipfsPrefix.length);
      const url = await buildIPFSUrl(cid, pathWithQuery);
      window.location.href = url;
    } else if (data.match(ipAddressRegex)) {
      const url = "http://" + data + pathWithQuery;
      window.location.href = url;
    } else {
      // Extract pathname from url for display purposes
      const url = data + pathWithQuery;
      window.location.href = addHttps(url);
    }
  } catch (err) {
    console.error(err);
    debugger;
    window.location.href = `./404.html?redirectUrl=${url}`;
  }
};

const handleWnsRedirect = async ({ name, domain }) => {
  let data;

  try {
    const res = await fetch(
      `https://preview-naming.warly.co/api/v1/get-registration-by-name?name=${name}&domain=${domain}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
        params: {
          name,
          domain,
        },
      }
    );
    data = await res.json();
  } catch (error) {
    console.error(error);
    window.location.href = `./404.html?name=${name}&domain=${domain}`;
    return;
  }

  if (!data?.id) {
    window.location.href = `./404.html?name=${name}&domain=${domain}`;
    return;
  }

  if (data?.records?.http) {
    window.location.href = data.records.http;
    return;
  }

  if (data?.id && !data?.records?.http) {
    window.location.href = `./404.html?name=${name}&domain=${domain}&registered=true`;
  }
};

const handlePortalsRedirect = async ({ name, domain }) => {
  const res = await fetch(
    `https://preview-naming.warly.co/api/v1/get-registration-by-name?name=${name}&domain=${domain}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      params: {
        name,
        domain,
      },
    }
  );

  const data = await res.json();

  if (data?.records?.portalsRoomId) {
    window.location.href = `https://theportal.to/?room=${data.records.portalsRoomId}`;
  } else {
    window.location.href = "./404.html";
  }
};

export const handleRedirect = async ({ web3, redirectUrl }) => {
  const registrationEl = document.getElementById("registration");
  const urlParsed = new URL(redirectUrl);
  const hostnameArray = urlParsed.hostname.split(".");
  const domain = hostnameArray[hostnameArray.length - 1];
  const name = hostnameArray[hostnameArray.length - 2];

  registrationEl.textContent = `${name}.${domain}`;

  if (urlParsed?.host === "nft") {
    const mintAddress = urlParsed.pathname.replaceAll("/", "");
    window.location.href = `https://warly.co/nft/${mintAddress}`;
    return;
  }

  switch (domain) {
    case "sol":
      handleSolRedirect({ web3, urlParsed, hostnameArray, name });
      break;
    case "portals":
      handlePortalsRedirect({ name, domain });
      break;
    case "degen":
      handleWnsRedirect({ name, domain });
      break;
    default:
      window.location.href = "./404.html";
      break;
  }
};
