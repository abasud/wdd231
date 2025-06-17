const clients = "../finalproject/data/clients.json";
const container = document.querySelector("#clients");

async function getClientCards() {
    try {
        const response = await fetch(clients);
        const items = await response.json();
        createClientCards(items);
    } catch (error) {
        console.error("Error fetching item data:", error);
    }
}

function createClientCards(clients) {
    clients.forEach(client => {
        let card = document.createElement("section");
        let companyName = document.createElement("h2");
        let companyAddress = document.createElement("address");
        let companyPhone = document.createElement("p");
        let companyEmail = document.createElement("p");

        companyName.textContent = client.name;
        companyAddress.textContent = client.address;
        companyPhone.textContent = `Phone: ${client.phone}`;
        companyEmail.textContent = `Email: ${client.email}`;

        card.appendChild(companyName);
        card.appendChild(companyAddress);
        card.appendChild(companyPhone);
        card.appendChild(companyEmail);

        container.appendChild(card);
    })
}

getClientCards();