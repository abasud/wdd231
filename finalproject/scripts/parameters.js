const params = new URLSearchParams(window.location.search);
const userName = params.get("full-name");
const country = params.get("country");
const dateAssessment = params.get("date-assessment");
const timeAssessment = params.get("time-assessment");
const email = params.get("email");
const selectedTopics = params.getAll("topics");
const details = params.get("assessment-details");

const information = document.querySelector(".thankyou");

let nameInfo = document.createElement("p");
nameInfo.textContent = `Full name: ${userName}`;
let countryInfo = document.createElement("p");
countryInfo.textContent = `Country: ${country}`;
let dateInfo = document.createElement("p");
dateInfo.textContent = `Date: ${dateAssessment}`;
let timeInfo = document.createElement("p");
timeInfo.textContent = `Time: ${timeAssessment}`;
let emailInfo = document.createElement("p");
emailInfo.textContent = `Email: ${email}`;
let topicsInfo = document.createElement("p");
topicsInfo.textContent = `Services: ${selectedTopics}`;
let detailsInfo = document.createElement("p");
detailsInfo.textContent = `Details: ${details}`;

information.appendChild(nameInfo);
information.appendChild(countryInfo);
information.appendChild(dateInfo);
information.appendChild(timeInfo);
information.appendChild(emailInfo);
information.appendChild(topicsInfo);
information.appendChild(detailsInfo);