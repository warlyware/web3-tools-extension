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

const redirectSolUrl = async (url) => {
  const tab = await getCurrentTab();
  if (tab !== undefined && url !== undefined) {
    chrome.tabs.update(tab.id, {
      url: `redirect.html?solanaUrl=${url}`,
    });
  }
};
const redirectDegenUrl = async (url) => {
  const tab = await getCurrentTab();
  if (tab !== undefined && solanaUrl !== undefined) {
    chrome.tabs.update(tab.id, {
      url: `redirect.html?degenUrl=${solanaUrl}`,
    });
  }
};

// Listen for .sol requests
chrome.webRequest.onBeforeRequest.addListener(
  async (details) => {
    await redirectSolUrl(details.url);
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
    const solanaUrl = new URL(details.url).searchParams.get("q");
    await redirectSolUrl(solanaUrl);
    debugger;
  },
  {
    urls: solSearchUrls,
  },
  []
);
// Intercept browser created search engine requests for .degen
chrome.webRequest.onBeforeRequest.addListener(
  async (details) => {
    console.log("onBeforeRequest", details);
    const url = new URL(details.url).searchParams.get("q");
    await redirectDegenUrl(url);
    debugger;
  },
  {
    urls: degenSearchUrls,
  },
  []
);
