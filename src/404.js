const main = () => {
  const name = new URL(window.location.href).searchParams.get("name");
  const domain = new URL(window.location.href).searchParams.get("domain");
  console.log({ name, domain });
  const registrationEl = document.getElementById("registration");
  registrationEl.textContent = `${name}.${domain}`;
  var a = document.createElement("a");
  var linkText = document.createTextNode("Click here to register");
  a.appendChild(linkText);
  a.title = "WNS";
  a.href = `https://preview-naming.warly.co/${domain}/${name}`;
  document.getElementById("link-anchor").appendChild(a);

  // document.getElementById("display").textContent = "tesst";
};

main();
