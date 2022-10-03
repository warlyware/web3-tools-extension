const appendButton = () => {
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
  newElement.onclick = () => {
    window.open(`https://warly.co/nft/${mintAddress}`, "_blank");
  };

  newElement.src =
    "https://warly.co/images/warlyco-logo-white-on-transparent.svg";
  newElement.alt = "Check NFT info on warly.co";
  newElement.title = "Check NFT info on warly.co";

  let el;
  let counter = 0;
  const interval = setInterval(() => {
    el = document.querySelector(".me-dropdown-container.social-share");

    if (el) {
      el.closest("div.align-items-center").appendChild(newElement);
    }
    counter++;
    if (counter === 10 || el) {
      clearInterval(interval);
    }
  }, 500);
};

appendButton();
