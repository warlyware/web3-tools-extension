import "crx-hotreload";
import solSearchUrls from "./constants/sol-search-urls";
import degenSearchUrls from "./constants/degen-search-urls";

const getCurrentTab = async () => {
  const [tab] = await chrome.tabs.query({
    active: true,
    currentWindow: true,
  });
  return tab;
};

const handleRedirect = async (url) => {
  const tab = await getCurrentTab();
  if (tab !== undefined && url !== undefined) {
    chrome.tabs.update(tab.id, {
      url: `redirect.html?redirectUrl=${url}`,
    });
  }
};

// Listen for .sol requests
chrome.webRequest.onBeforeRequest.addListener(
  async (details) => {
    await handleRedirect(details.url);
  },
  {
    urls: ["*://*.sol/*"],
  },
  []
);
// Listen for .degen requests
chrome.webRequest.onBeforeRequest.addListener(
  async (details) => {
    await redirectDegenUrl(details.url);
  },
  {
    urls: ["*://*.degen/*"],
  },
  []
);

// Intercept browser created search engine requests for .sol
chrome.webRequest.onBeforeRequest.addListener(
  async (details) => {
    console.log("onBeforeRequest", details);
    const url = new URL(details.url).searchParams.get("q");
    await handleRedirect(url);
    debugger;
  },
  {
    urls: [...solSearchUrls, ...degenSearchUrls],
  },
  []
);
// Intercept browser created search engine requests for .degen
// chrome.webRequest.onBeforeRequest.addListener(
//   async (details) => {
//     console.log("degen", details);
//     const url = new URL(details.url).searchParams.get("q");
//     await redirectDegenUrl(url);
//     debugger;
//   },
//   {
//     urls: degenSearchUrls,
//   },
//   []
// );
