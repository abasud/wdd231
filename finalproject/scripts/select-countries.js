const countries = "../finalproject/data/countries.json";
const datalist = document.querySelector("#countries");

async function getCountries() {
    try {
        const response = await fetch(countries);
        const items = await response.json();
        addCountry(items);
    } catch (error) {
        console.error("Error fetching item data:", error);
    }
}

function addCountry(countries) {
    countries.forEach((country) => {
        let countryOption = document.createElement("option");
        countryOption.value = country.name;
        datalist.appendChild(countryOption);
    });
}

getCountries();