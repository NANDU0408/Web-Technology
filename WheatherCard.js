console.log("Script executed");  // Add this line to check if the script is running

async function asyncFunction() {
    try {
        let response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Dharwad&appid=0d2f8090f529112e45ed168aa49a3fee");
        
        if (!response.ok) {
            throw new Error('Failed to fetch data. Status: ' + response.status);
        }

        return response;
    } catch (error) {
        console.error(error);
    }
}

async function fetchData() {
    try {
        let gettingData = await asyncFunction();
        let convertingJson = await gettingData.json();

        document.getElementById("cityName").innerText = convertingJson.name || 'N/A';
        document.getElementById("temperature").innerText = convertingJson.main ? convertingJson.main.temp : 'N/A';
        document.getElementById("windSpeed").innerText = convertingJson.wind ? convertingJson.wind.speed : 'N/A';
        document.getElementById("longitude").innerText = convertingJson.coord ? convertingJson.coord.lon : 'N/A';
        document.getElementById("latitude").innerText = convertingJson.coord ? convertingJson.coord.lat : 'N/A';

        // Log the fetched data to the console
        console.log("Fetched Data:", convertingJson);
    } catch (error) {
        console.error(error);
    }
}

// Call the fetchData function
fetchData();