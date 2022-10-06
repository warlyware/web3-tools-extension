const main = () => {
  const name = new URL(window.location.href).searchParams.get("name");
  const domain = new URL(window.location.href).searchParams.get("domain");
  const isRegistered = new URL(window.location.href).searchParams.get(
    "registered"
  );

  const primaryMessageEl = document.getElementById("primary-message");
  const secondaryMessageEl = document.getElementById("secondary-message");
  const registrationEl = document.getElementById("registration");
  const linkAnchorEl = document.getElementById("anchor");

  primaryMessageEl.textContent = isRegistered
    ? "The owner of this domain has not yet configured a web record."
    : "No registration found.";
  secondaryMessageEl.textContent = isRegistered ? "" : "is available!";
  // if (isRegistered) {
  // } else {
  //   primaryMessageEl.textContent = `No registration found.`;
  //   secondaryMessageEl.textContent = "is available!";
  // }

  if (isRegistered) return;

  // console.log({ name, domain });
  // console.log("poopytrim");
  registrationEl.textContent = `${name}.${domain}`;

  var a = document.createElement("a");
  var linkText = document.createTextNode("Click here to register");
  a.appendChild(linkText);
  a.title = "WNS";
  a.style.textDecoration = "underline";
  a.href = `https://preview-naming.warly.co/${domain}/${name}`;
  linkAnchorEl.appendChild(a);
};

main();
