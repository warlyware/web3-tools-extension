const imageAltText = "Check NFT info on warly.co";
const createButton = () => {
  var newElement = document.createElement("img");
  newElement.style.float = "right";
  newElement.style.display = "inline";
  newElement.style.padding = "2px";
  newElement.style.marginLeft = "10px";
  newElement.style.height = "24px";
  newElement.style.width = "30px";
  newElement.style.borderRadius = "50%";
  newElement.style.cursor = "pointer";
  newElement.onclick = () => {
    window.open(
      `https://warly.co/nft/${window.location.pathname.split("/")[2]}`,
      "_blank"
    );
  };

  newElement.id = "warlyco-button";
  newElement.src =
    "https://warly.co/images/warlyco-logo-white-on-transparent.svg";
  newElement.alt = imageAltText;
  newElement.title = imageAltText;
  return newElement;
};

const appendButtonToNftPage = (buttonEl) => {
  if (!window.location.href.includes("https://magiceden.io/item-details/"))
    return;

  let hookEl;
  let counter = 0;
  const interval = setInterval(() => {
    hookEl = document.querySelector(".me-dropdown-container.social-share");
    const existingButton = document.getElementById("warlyco-button");
    if (existingButton) {
      hookEl.removeChild(existingButton);
    }

    if (hookEl) {
      hookEl.closest("div.align-items-center").appendChild(buttonEl);
    }
    counter++;
    if (counter === 20 || hookEl) {
      clearInterval(interval);
    }
  }, 1000);
};

const handleAppendButton = () => {
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
