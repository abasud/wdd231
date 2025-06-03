import { memberships } from "./memberships.js";

const container = document.querySelector(".cards");

function createCards(memberships) {
    memberships.forEach(membership => {
        let card = document.createElement("div");
        card.className = "membership-card";
        let cardTitle = document.createElement("p");
        let openButton = document.createElement("button");
        openButton.className = "card-button";

        cardTitle.textContent = membership.name;
        openButton.textContent = "Learn More";

        card.appendChild(cardTitle);
        card.appendChild(openButton);
        container.appendChild(card);

        let modal = document.createElement("dialog");
        let modalTitle = document.createElement("div");
        modalTitle.className = "modal-title";
        let modalH2 = document.createElement("h2");
        let modalClose = document.createElement("button");
        let annualCost = document.createElement("p");
        let eligibility = document.createElement("p");
        let benefits = document.createElement("ul");
        membership.benefits.forEach(benefit => {
            let li = document.createElement("li");
            li.textContent = benefit;
            benefits.appendChild(li);
        });
        let benefitsTitle = document.createElement("p");

        modalH2.textContent = membership.name;
        modalClose.textContent = "X";
        annualCost.innerHTML = `Annual Cost: ${membership.annual_cost} USD`;
        eligibility.innerHTML = `Eligibility: ${membership.eligibility}`;
        benefitsTitle.textContent = "Benefits:"

        modalTitle.appendChild(modalH2);
        modalTitle.appendChild(modalClose);
        modal.appendChild(modalTitle);
        modal.appendChild(annualCost);
        modal.appendChild(eligibility);
        modal.appendChild(benefitsTitle);
        modal.appendChild(benefits);

        container.appendChild(modal);

        openButton.addEventListener("click", () => {
            modal.showModal();
        });

        modalClose.addEventListener("click", () => modal.close());
    })
}

createCards(memberships);