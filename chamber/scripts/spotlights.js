const data = "../chamber/data/members.json";
const container = document.querySelector(".spotlights");

document.addEventListener("DOMContentLoaded", () => {
    getSpotlightsCard();
});

async function getSpotlightsCard() {
    try {
        const response = await fetch(data);
        const companies = await response.json();
        const eligibleCompanies = companies.filter(c => c.membership_level === 2 || c.membership_level === 3);
        const shuffled = eligibleCompanies.sort(() => 0.5 - Math.random());
        const spotlightCompanies = shuffled.slice(0, 2);
        displaySpotlightsCard(spotlightCompanies);
    } catch (error) { 
        console.error("Error fetching company data:", error);
    }
}

function displaySpotlightsCard(companies) {
    container.innerHTML = "";
    companies.forEach(company => {
        let card = document.createElement("article");
        let companyName = document.createElement("h2");
        let companyDiv = document.createElement("div");
        let companyImage = document.createElement("img");
        let companyUl = document.createElement("ul");
        let companyAddress = document.createElement("li");
        let companyPhone = document.createElement("li");
        let companyUrl = document.createElement("li");
        companyUrl.className = "spotlight-url";
        let companyMembership = document.createElement("li");

        let level;
        if (company.membership_level == 2) {
            level = "Silver";
        } 
        else if (company.membership_level == 3) {
            level = "Gold"
        }

        companyName.textContent = company.name;
        companyImage.src = `../chamber/images/${company.image}`;
        companyImage.alt = "Company image";
        companyAddress.innerHTML = `<strong>ADDRESS:</strong> ${company.address}`;
        companyPhone.innerHTML = `<strong>PHONE(S):</strong> ${company.phone_numbers[0]}`;
        companyUrl.innerHTML = `<strong>WEBSITE:</strong> <a href="${company.website}" target="_blank">${company.website}</a>`;
        companyMembership.innerHTML = `<strong>LEVEL:</strong> ${level}`;

        companyUl.appendChild(companyAddress);
        companyUl.appendChild(companyPhone);
        companyUl.appendChild(companyUrl);
        companyUl.appendChild(companyMembership);

        companyDiv.appendChild(companyImage);
        companyDiv.appendChild(companyUl);

        card.appendChild(companyName);
        card.appendChild(companyDiv);        

        container.appendChild(card);
    });
}