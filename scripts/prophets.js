const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const cards = document.querySelector("#cards");

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    displayProphets(data.prophets);
  }
  
getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
      let card = document.createElement('section');
      let fullName = document.createElement('h2');
      let additionalData = document.createElement('div');
      let birthDate = document.createElement('p');
      let birthPlace = document.createElement('p');
      let portrait = document.createElement('img');
  
      fullName.textContent = `${prophet.name} ${prophet.lastname}`;
      birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
      birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;
      portrait.setAttribute('src', prophet.imageurl);
      portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');

      additionalData.classList.add('data');

      additionalData.appendChild(birthDate);
      additionalData.appendChild(birthPlace);
  
      card.appendChild(fullName);
      card.appendChild(additionalData);
      card.appendChild(portrait);
  
      cards.appendChild(card);
    });
  }