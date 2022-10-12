const createButton = () => {
  const mintAddress = window.location.pathname.split("/")[2];

  var newElement = document.createElement("img");
  newElement.style.float = "right";
  newElement.style.display = "inline";
  newElement.style.padding = "2px";
  newElement.style.marginLeft = "10px";
  newElement.style.height = "24px";
  newElement.style.width = "30px";
  newElement.style.borderRadius = "50%";
  newElement.style.cursor = "pointer";
  newElement.style.alt = "warlyco";
  newElement.onclick = () => {
    window.open(`https://warly.co/nft/${mintAddress}`, "_blank");
  };

  newElement.src =
    "https://warly.co/images/warlyco-logo-white-on-transparent.svg";
  newElement.alt = "Check NFT info on warly.co";
  newElement.title = "Check NFT info on warly.co";
  return newElement;
};

const appendButtonToNftPage = (buttonEl) => {
  if (!window.location.href.includes("https://magiceden.io/item-details/"))
    return;

  let el;
  let counter = 0;
  const interval = setInterval(() => {
    el = document.querySelector(".me-dropdown-container.social-share");

    if (el) {
      el.closest("div.align-items-center").appendChild(buttonEl);
    }
    counter++;
    if (counter === 20 || el) {
      clearInterval(interval);
    }
  }, 500);
};

const handleAppendButton = () => {
  const existingButton = document.querySelector('[alt="warlyco"]');
  if (existingButton) {
    existingButton.remove();
  }

  const buttonEl = createButton();
  appendButtonToNftPage(buttonEl);
};

const addMessageListener = () => {
  chrome.runtime.onMessage.addListener(function (request) {
    if (request.action === "PIN_BUTTON") {
      handleAppendButton();
    }
  });
};

const main = () => {
  addMessageListener();
  handleAppendButton();
};

main();
