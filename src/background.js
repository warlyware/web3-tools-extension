import "crx-hotreload";
import nftSearchUrls from "./constants/nft-search-urls";
import solSearchUrls from "./constants/sol-search-urls";
import degenSearchUrls from "./constants/degen-search-urls";
import portalsSearchUrls from "./constants/portals-search-urls";
import verseSearchUrls from "./constants/verse-search-urls";
import metaverseSearchUrls from "./constants/metaverse-search-urls";

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

chrome.webRequest.onBeforeRequest.addListener(
  async (details) => {
    await handleRedirect(details.url);
  },
  {
    urls: [
      "*://*.sol/*",
      "*://*.degen/*",
      "*://*.portals/*",
      "*://*.metaverse/*",
      "*://*.verse/*",
    ],
  },
  []
);

chrome.webRequest.onBeforeRequest.addListener(
  async (details) => {
    console.log("onBeforeRequest", details);
    const url = new URL(details.url).searchParams.get("q");
    await handleRedirect(url);
  },
  {
    urls: [
      ...solSearchUrls,
      ...degenSearchUrls,
      ...portalsSearchUrls,
      ...verseSearchUrls,
      ...metaverseSearchUrls,
      ...nftSearchUrls,
    ],
  },
  []
);

const sendMessageToAppendButton = async (tabId) => {
  chrome.tabs.sendMessage(tabId, { action: "PIN_BUTTON" }, function (response) {
    console.log(response.farewell);
  });
};

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (
    (changeInfo.status === "complete" &&
      tab?.url?.includes("https://magiceden.io/item-details/")) ||
    (changeInfo.status === "complete" &&
      tab?.url?.includes("https://magiceden.io/marketplace/"))
  ) {
    sendMessageToAppendButton(tabId);
    console.log("should be added");
    chrome.scripting.executeScript(
      {
        target: { tabId: tab.id },
        files: ["inject.js"],
      },
      () => {}
    );
  }
});
