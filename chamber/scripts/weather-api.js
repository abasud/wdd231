const currentTemp = document.querySelector('#current-temp')
const weatherIcon = document.querySelector('#weather-icon')
const captionDesc = document.querySelector('figcaption')

const myKey = "b31a038e7ada272c9af31ce03d0b5f9a"
const myLat = "2.9341899230749506"
const myLon = "-75.28097274429354"

const url = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLon}&units=metric&appid=${myKey}`;
const forecastURL = `//api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLon}&units=metric&appid=${myKey}`;


async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

async function apiForecast() {
    try {
        const response = await fetch(forecastURL);
        if (response.ok) {
            const data = await response.json();
            displayForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;C`
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    weatherIcon.setAttribute('src', iconsrc)
    weatherIcon.setAttribute('alt', data.weather[0].description)
    captionDesc.innerHTML = data.weather[0].description;
}

function displayForecast(data) {
    const forecastContainer = document.querySelector('#forecast');
    forecastContainer.innerHTML = '';

    const dailyData = data.list.filter(item => item.dt_txt.includes('12:00:00')).slice(0, 3);

    dailyData.forEach(item => {
        const date = new Date(item.dt_txt);
        const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
        const temp = item.main.temp.toFixed(1);
        const icon = `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;
        const desc = item.weather[0].description;

        const section = document.createElement('section');
        section.classList.add('forecast-day');
        section.innerHTML = `
            <h3>${dayName}</h3>
            <img src="${icon}" alt="${desc}">
            <p>${temp}°C</p>
            <p style="text-transform: capitalize;">${desc}</p>
        `;

        forecastContainer.appendChild(section);
    });
}


apiFetch();
apiForecast();
