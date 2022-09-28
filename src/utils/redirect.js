import * as CryptoJS from "../libraries/crypto-js.min.js";
import { addHttps } from "./";

/**
 * Retreive the data stored in a given account
 *
 * @param {web3.PublicKey} publicKey key pointing to the account
 * @returns {Promise<string>} Promise resolving to the stringified content of the account
 * @throws {Error}
 */
async function getContentFromAccount(web3, publicKey) {
  const connection = new web3.Connection(web3.clusterApiUrl("mainnet-beta"));
  const nameAccount = await connection.getAccountInfo(publicKey, "processed");
  const data = nameAccount.data.toString("ascii").slice(96).replace(/\0/g, "");
  return data;
}

/**
 * Get the sha256 hash of a domain name or subdomain identifier prefixed with the hash prefix.
 * Code from @solana/spl-name-service with modifications so it works in the browser.
 *
 * @param {string} name The domain name or subdomain identifier to hash
 * @returns {string} Hashed name for onchain lookup
 */
function getHashedName(name) {
  const HASH_PREFIX = "SPL Name Service";
  const input = HASH_PREFIX + name;
  const fromHexString = (hexString) =>
    new Uint8Array(
      hexString.match(/.{1,2}/g).map((byte) => parseInt(byte, 16))
    );
  debugger;
  const hashed_name = fromHexString(CryptoJS.SHA256(input).toString());
  return hashed_name;
}

/**
 * Compute the public key for a given account in the Solana Name Service.
 * The inputs are the seeds that are used to compute the PDA.
 * Code from @solana/spl-name-service with modifications so it works in the browser.
 *
 * @param {string} hashed_name Hash of a domain name or subdomain identifier, as returned by getHashedName()
 * @param {web3.PublicKey | undefined} nameClass Class of the (sub?)domain name. Seems like this is currently unused, leave 'undefined',
 * @param {web3.PublicKey | undefined} nameParent Parent of the (sub?)domain name. For .sol domains, this is the .sol TLD Authority. For subdomains, this is the parent domain.
 * @returns {Promise<web3.PublicKey>} Key of the name's on-chain account
 */
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

/**
 * Compute the key for the account pointing to the domain.
 * See https://github.com/Bonfida/solana-name-service-guide
 *
 * @param {string} name The .sol domain name
 * @returns {Promise<web3.PublicKey>} Public key of the domain's account in the sns
 */
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

/**
 * Compute the key for the account pointing to a given subdomain.
 * See https://github.com/Bonfida/solana-name-service-guide
 *
 * @param {web3.PublicKey} parentDomainKey The parent .sol domain name
 * @param {string} subdomain The subdomain to compute the key for
 * @returns {Promise<web3.PublicKey>} Public key of the subdomain's account in the sns
 */
async function getSubdomainKey(parentDomainKey, subdomain) {
  const hashedName = getHashedName("\0".concat(subdomain));
  const subdomainAccount = await getNameAccountKey(
    hashedName,
    undefined,
    parentDomainKey
  );
  return subdomainAccount;
}

export const handleSolRedirect = async ({ web3, solanaUrl }) => {
  const solanaUrlParsed = new URL(solanaUrl);
  const hostnameArray = solanaUrlParsed.hostname.split(".");
  const SNSDomain = hostnameArray[hostnameArray.length - 2];
  const SNSDomainFull =
    (hostnameArray.length === 3 ? hostnameArray[0] + "." : "") +
    SNSDomain +
    ".sol";
  const SNSPathAndSearch = solanaUrlParsed.pathname + solanaUrlParsed.search;
  document.getElementById("display").textContent = SNSDomainFull;
  debugger;
  try {
    let domainKey = await getDomainKey(web3, SNSDomain);
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
      const url = await buildIPFSUrl(cid, SNSPathAndSearch);
      window.location.href = url;
    } else if (data.match(ipAddressRegex)) {
      const url = "http://" + data + SNSPathAndSearch;
      window.location.href = url;
    } else {
      // Extract pathname from url for display purposes
      const url = data + SNSPathAndSearch;
      window.location.href = addHttps(url);
    }
  } catch (err) {
    console.log(err);
    debugger;
    window.location.href = "./404.html";
  }
};

export const handleDegenRedirect = async ({ web3 } = {}) => {};
