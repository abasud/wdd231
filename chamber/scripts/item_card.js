const origin = "../chamber/data/items.json";
const container = document.querySelector(".allplaces");

async function getItemCards() {
    try {
        const response = await fetch(origin);
        const items = await response.json();
        displayItemCards(items);
    } catch (error) {
        console.error("Error fetching item data:", error);
    }
}

function displayItemCards(items) {
    items.forEach(item => {
        let card = document.createElement("div");
        let itemTitle = document.createElement("h2");
        let itemImg = document.createElement("img");
        let itemAddress = document.createElement("address");
        let itemDescription = document.createElement("p");
        let itemButton = document.createElement("button");

        itemTitle.textContent = item.name;

        itemImg.loading = "lazy";
        itemImg.alt = "Place image";

        itemImg.addEventListener("load", () => {
        itemImg.classList.add("loaded");
        });

        itemImg.src = `../chamber/images/discover/${item.photo}`;

        itemAddress.textContent = item.address;
        itemDescription.textContent = item.description;
        itemButton.textContent = "Learn More";

        card.appendChild(itemTitle);
        card.appendChild(itemImg);
        card.appendChild(itemAddress);
        card.appendChild(itemDescription);
        card.appendChild(itemButton);

        container.appendChild(card);
    })
}

getItemCards();
