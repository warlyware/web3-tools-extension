import "crx-hotreload";
import solSearchUrls from "./constants/sol-search-urls";
import degenSearchUrls from "./constants/degen-search-urls";
import portalsSearchUrls from "./constants/portals-search-urls";

self.oninstall = () => self.skipWaiting();

let lifeline;

keepAlive();

chrome.runtime.onConnect.addListener((port) => {
  if (port.name === "keepAlive") {
    lifeline = port;
    setTimeout(keepAliveForced, 295e3); // 5 minutes minus 5 seconds
    port.onDisconnect.addListener(keepAliveForced);
  }
});

function keepAliveForced() {
  lifeline?.disconnect();
  lifeline = null;
  keepAlive();
}

async function keepAlive() {
  if (lifeline) return;
  for (const tab of await chrome.tabs.query({ url: "*://*/*" })) {
    try {
      await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: () => chrome.runtime.connect({ name: "keepAlive" }),
        // `function` will become `func` in Chrome 93+
      });
      chrome.tabs.onUpdated.removeListener(retryOnTabUpdate);
      return;
    } catch (e) {}
  }
  chrome.tabs.onUpdated.addListener(retryOnTabUpdate);
}

async function retryOnTabUpdate(tabId, info, tab) {
  if (info.url && /^(file|https?):/.test(info.url)) {
    keepAlive();
  }
}

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
    urls: ["*://*.sol/*", "*://*.degen/*", "*://*.portals/*"],
  },
  []
);

// Intercept browser created search engine requests for .sol
chrome.webRequest.onBeforeRequest.addListener(
  async (details) => {
    console.log("onBeforeRequest", details);
    const url = new URL(details.url).searchParams.get("q");
    await handleRedirect(url);
  },
  {
    urls: [...solSearchUrls, ...degenSearchUrls, ...portalsSearchUrls],
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
