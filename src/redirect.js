import { addHttps } from "./utils";
import { handleSolRedirect, handleDegenRedirect } from "./utils/redirect";

/**
 * Redirects the solana url to the domain/ip/ipfs hash it points to.
 *
 * window.location.href has one param `solanaUrl`, which contains the hostname and path
 *  of the solana url that is passed in. Not required to contain other elements.
 */
async function main() {
  await import("./libraries/solana-web3.min.js");
  await import("./libraries/crypto-js.min.js");
  const web3 = window.solanaWeb3;
  console.log(web3);
  debugger;

  const solanaUrl = addHttps(
    new URL(window.location.href).searchParams.get("solanaUrl")
  );
  const degenUrl = addHttps(
    new URL(window.location.href).searchParams.get("degenUrl")
  );
  if (solanaUrl) {
    handleSolRedirect({
      web3,
      solanaUrl,
    });
    console.log("solanaUrl", solanaUrl);
    return;
  }
  if (degenUrl) {
    handleDegenRedirect({
      web3,
      degenUrl,
    });
    console.log("degenUrl", degenUrl);
    return;
  }
}

main();
