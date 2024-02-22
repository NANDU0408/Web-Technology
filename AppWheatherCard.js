console.log("Script executed");
async function fetchData() {
    try {
        const city = document.getElementById("city-input").value || "Dharwad";
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0d2f8090f529112e45ed168aa49a3fee`);

        if (!response.ok) {
            throw new Error('Failed to fetch data. Status: ' + response.status);
        }

        let data = await response.json();
        updateWeatherCard(data);
    } catch (error) {
        console.error(error);
    }
}

function updateWeatherCard(data) {
    console.log(data);
    // Update city name
    document.getElementById("city-name").innerText = data.name || 'N/A';

    // Update date and time
    let currentDate = new Date();
    let formattedDate = currentDate.toLocaleDateString();
    let formattedTime = currentDate.toLocaleTimeString();
    document.getElementById("date").innerText = `${formattedDate} ${formattedTime}`;

    // Update temperature
    let temperature = data.main ? data.main.temp : 'N/A';
    document.getElementById("temperature").innerText = `Temperature: ${temperature} °C`;

    // Update weather icon
    let weatherIconCode = data.weather && data.weather[0] ? data.weather[0].icon : '';
    let weatherIconUrl = `http://openweathermap.org/img/w/${weatherIconCode}.png`;
    document.getElementById("weather-icon").src = weatherIconUrl;

    // Display the weather info container
    document.getElementById("weather-info").classList.remove("d-none");
}

fetchData();