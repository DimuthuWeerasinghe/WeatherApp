function weather() {
    const location = document.getElementById("searchBar").value;
    if (!location) {
        console.log("No location entered.");
        return;
    }
    
    fetch(`https://api.weatherapi.com/v1/current.json?key=927a746baa784acd9d185531241509&q=${location}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Response Not OK!");
            }
            return response.json();
        })
        .then(data => {
            console.log(data);

            // Update weather data in the UI
            document.getElementById("weatherIcon").src = data.current.condition.icon;
            document.getElementById("currentText").textContent = data.current.condition.text;
            document.getElementById("currentTemp").textContent = data.current.temp_c + "°C";
            document.getElementById("location").textContent = `${data.location.name}, ${data.location.country}`;
            document.getElementById("date&time").textContent = data.location.localtime;
            document.getElementById("wind").textContent = `Wind Speed: ${data.current.wind_kph} kph`;
            document.getElementById("Humidity").textContent = `Humidity: ${data.current.humidity}%`;
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
        });
}

// Set an interval to call the weather function every 5 seconds
setInterval(() => {
    weather();
}, 5000);

