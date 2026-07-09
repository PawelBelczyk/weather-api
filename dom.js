const location = document.getElementById("location");
const temperature = document.getElementById("temperature");
const feelsLike = document.getElementById("feelsLike");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const description = document.getElementById("description");
const weather = document.getElementById("weather-icon");


export function displayWeather(data, unit) {

    location.textContent = data.location.name;

    if (unit === "C") {
        temperature.textContent = `${data.current.temp_c} °C`;
        feelsLike.textContent = `${data.current.feelslike_c} °C`;
    } else {
        temperature.textContent = `${data.current.temp_f} °F`;
        feelsLike.textContent = `${data.current.feelslike_f} °F`;
    }

    humidity.textContent = `${data.current.humidity}%`;
    wind.textContent = `${data.current.wind_kph} km/h`;
    description.textContent = data.current.condition.text;

    weather.src = `https:${data.current.condition.icon}`;
    weather.hidden = false;
}


export function clearWeather() {

    location.textContent = "";
    temperature.textContent = "";
    feelsLike.textContent = "";
    humidity.textContent = "";
    wind.textContent = "";
    description.textContent = "";

    weather.hidden = true;
}


export function changeBackground(condition) {

    document.body.className = "";

    const conditionText = condition.toLowerCase();

    if (conditionText.includes("rain")) {
        document.body.classList.add("rain");

    } else if (conditionText.includes("snow")) {
        document.body.classList.add("snow");

    } else if (conditionText.includes("cloud")) {
        document.body.classList.add("cloudy");

    } else if (
        conditionText.includes("sun") ||
        conditionText.includes("clear")
    ) {
        document.body.classList.add("sunny");

    } else {
        document.body.classList.add("default");
    }
}