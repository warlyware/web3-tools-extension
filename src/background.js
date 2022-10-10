import "crx-hotreload";
import nftSearchUrls from "./constants/nft-search-urls";
import getSearchUrls from "./utils/get-search-urls";

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
    urls: ["*://*.sol/*", "*://*.degen/*", "*://*.portals/*"],
  },
  []
);

chrome.webRequest.onBeforeRequest.addListener(
  async (details) => {
    const url = new URL(details.url).searchParams.get("q");
    await handleRedirect(url);
  },
  {
    urls: [
      ...getSearchUrls("sol"),
      ...getSearchUrls("degen"),
      ...getSearchUrls("portals"),
      ...nftSearchUrls,
    ],
  },
  []
);

const sendMessageToAppendButton = async (tabId) => {
  chrome.tabs.sendMessage(tabId, { action: "PIN_BUTTON" }, () => {});
};

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (
    changeInfo.status === "complete" &&
    tab?.url?.includes("https://magiceden.io/item-details/")
  ) {
    sendMessageToAppendButton(tabId);
    chrome.scripting.executeScript(
      {
        target: { tabId: tab.id },
        files: ["inject.js"],
      },
      () => {}
    );
  }
});
