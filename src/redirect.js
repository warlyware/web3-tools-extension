import { addHttps } from "./utils";
import { handleRedirect } from "./utils/redirect";

/**
 * Redirects the solana url to the domain/ip/ipfs hash it points to.
 *
 * window.location.href has one param `redirectUrl`, which contains the hostname and path
 *  of the solana url that is passed in. Not required to contain other elements.
 */
async function main() {
  const web3 = window.solanaWeb3;

  const redirectUrl = addHttps(
    new URL(window.location.href).searchParams.get("redirectUrl")
  );
  console.log("handleRedirect", { redirectUrl });
  if (redirectUrl) {
    handleRedirect({
      web3: solanaWeb3,
      redirectUrl,
    });
    return;
  }
}

main();
