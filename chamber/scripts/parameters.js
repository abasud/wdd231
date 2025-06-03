const params = new URLSearchParams(window.location.search);
const userName = params.get("first-name");
const lastName = params.get("last-name");
const email = params.get("email");
const mobile = params.get("mobile");
const organization = params.get("organization");
const time = params.get("timestamp");

const information = document.querySelector(".thankyou");

let nameInfo = document.createElement("p");
nameInfo.textContent = `Name: ${userName}`;
let lastNameInfo = document.createElement("p");
lastNameInfo.textContent = `Last name: ${lastName}`;
let emailInfo = document.createElement("p");
emailInfo.textContent = `Email: ${email}`;
let mobileInfo = document.createElement("p");
mobileInfo.textContent = `Mobile: ${mobile}`;
let orgInfo = document.createElement("p");
orgInfo.textContent = `Organization: ${organization}`;
let timeInfo = document.createElement("p");
timeInfo.textContent = `Submit time: ${time}`;

information.appendChild(nameInfo);
information.appendChild(lastNameInfo);
information.appendChild(emailInfo);
information.appendChild(mobileInfo);
information.appendChild(orgInfo);
information.appendChild(timeInfo);