const origin = "../chamber/data/members.json";
const container = document.querySelector(".companies");

const memberCards = document.querySelector("#memberCards");
const membersList = document.querySelector("#membersList");

memberCards.addEventListener("click", () => {
    getCompaniesDataCard();
    container.classList.add("card");
    container.classList.remove("list")
})

membersList.addEventListener("click", () => {
    getCompaniesDataList();
    container.classList.add("list");
    container.classList.remove("card")
})

async function getCompaniesDataCard() {
    try {
        const response = await fetch(origin);
        const companies = await response.json();
        displayCompaniesCard(companies);
    } catch (error) {
        console.error("Error fetching company data:", error);
    }
}

async function getCompaniesDataList() {
    try {
        const response = await fetch(origin);
        const companies = await response.json();
        displayCompaniesList(companies);
    } catch (error) {
        console.error("Error fetching company data:", error);
    }
}

function displayCompaniesCard(companies) {
    container.innerHTML = "";
    companies.forEach(company => {
        let card = document.createElement("article");
        let companyName = document.createElement("h2");
        let companyDiv = document.createElement("div");
        let companyImage = document.createElement("img");
        let companyUl = document.createElement("ul");
        let companyEmail = document.createElement("li");
        let companyPhone = document.createElement("li");
        let companyUrl = document.createElement("li");

        companyName.textContent = company.name;
        companyImage.src = `../chamber/images/${company.image}`;
        companyEmail.innerHTML = `<strong>EMAIL:</strong> ${company.email}`;
        companyPhone.innerHTML = `<strong>PHONE(S):</strong> ${company.phone_numbers[0]}`;
        companyUrl.innerHTML = `<strong>WEBSITE:</strong> <a href="${company.website}" target="_blank">${company.website}</a>`;

        companyUl.appendChild(companyEmail);
        companyUl.appendChild(companyPhone);
        companyUl.appendChild(companyUrl);

        companyDiv.appendChild(companyImage);
        companyDiv.appendChild(companyUl);

        card.appendChild(companyName);
        card.appendChild(companyDiv);        

        container.appendChild(card);
    });
}

function displayCompaniesList(companies) {
    container.innerHTML = "";
    companies.forEach(company => {
        let companiesList = document.createElement("ul");
        let member = document.createElement("li");

        member.textContent = company.name;

        companiesList.appendChild(member);

        container.appendChild(companiesList);
    });
}
