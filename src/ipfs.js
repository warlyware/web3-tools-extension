import { addHttps } from "./utils";

const IPFSGateways = [
  "dweb.link",
  "infura-ipfs.io",
  "cf-ipfs.com",
  "astyanax.io",
  "ipfs.io",
  "cloudflare-ipfs.com",
  "gateway.pinata.cloud",
];
const DEFAULT_GATEWAY = IPFSGateways[0];

async function buildIPFSUrl(cid, path) {
  const gatewayUrl = await getIPFSGateway();
  return addHttps(gatewayUrl + "/ipfs/" + cid + path);
}

async function getIPFSGateway() {
  const data = await chrome.storage.local.get("IPFSGateway");
  if ("IPFSGateway" in data) {
    return data["IPFSGateway"];
  } else {
    await setIPFSGateway(DEFAULT_GATEWAY);
    return DEFAULT_GATEWAY;
  }
}

async function setIPFSGateway(gateway) {
  await chrome.storage.local.set({ IPFSGateway: gateway });
}
