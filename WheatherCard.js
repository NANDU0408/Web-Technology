console.log("Script executed");  // Add this line to check if the script is running

async function asyncFunction() {
    try {
        console.log("Fetching data...");
        let response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Bangalore&appid=0d2f8090f529112e45ed168aa49a3fee");

        if (!response.ok) {
            throw new Error('Failed to fetch data. Status: ' + response.status);
        }

        console.log("Data fetched successfully");
        return response;
    } catch (error) {
        console.error(error);
    }
}

async function fetchData() {
    try {
        console.log("Calling asyncFunction...");
        let gettingData = await asyncFunction();
        console.log("asyncFunction completed");

        console.log("Converting JSON...");
        let convertingJson = await gettingData.json();
        console.log("JSON converted:", convertingJson);

        console.log("Updating form values...");
        document.getElementById("cityName").value = convertingJson.name || 'N/A';
        document.getElementById("temperature").value = convertingJson.main ? convertingJson.main.temp : 'N/A';
        document.getElementById("windSpeed").value = convertingJson.wind ? convertingJson.wind.speed : 'N/A';
        document.getElementById("longitude").value = convertingJson.coord ? convertingJson.coord.lon : 'N/A';
        document.getElementById("latitude").value = convertingJson.coord ? convertingJson.coord.lat : 'N/A';

        console.log("Form values updated successfully");
    } catch (error) {
        console.error("Error in fetchData:", error);
    }
}

// Call the fetchData function
fetchData();