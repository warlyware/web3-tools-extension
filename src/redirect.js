import { addHttps } from "./utils";
import { handleRedirect } from "./utils/redirect";

async function main() {
  const web3 = window.solanaWeb3;

  const redirectUrl = addHttps(
    new URL(window.location.href).searchParams.get("redirectUrl")
  );

  if (redirectUrl) {
    handleRedirect({
      web3,
      redirectUrl,
    });
    return;
  }
}

main();
