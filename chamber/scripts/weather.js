const apiKey = "13346c6082ff4518965175721251503"; 
const city = "Neiva"; 

async function fetchWeather() {
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        document.getElementById("weather").innerHTML = `
            <h3>${data.location.name}, ${data.location.country}</h3>
            <p>🌤️ ${data.current.condition.text}</p>
            <p>🌡️ Temperature: ${data.current.temp_c}°C</p>
            <p>💨 Wind: ${data.current.wind_kph} km/h</p>
            
        `;
    } catch (error) {
        document.getElementById("weather").innerHTML = "<p>Unable to fetch weather data.</p>";
        console.error("Error fetching weather data:", error);
    }
}

fetchWeather();
