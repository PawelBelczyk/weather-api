

const location = document.getElementById("location");
  const temperature = document.getElementById("temperature");
  const feelsLike = document.getElementById("feelsLike");
  const humidity = document.getElementById("humidity");
  const wind = document.getElementById("wind");
  const description = document.getElementById("description");
  const weather = document.getElementById("weather-icon");

export function displayWeather(data, unit) {
   
   // weather-icon.src = `https:${data.current.condition.icon}`;
   // weather-icon.hidden = false;
   
   location.textContent = data.location.name;


if (unit === "C") {
    temperature.textContent = `${data.current.temp_c} °C`;
} else {
    temperature.textContent = `${data.current.temp_f} °F`;
}

if (unit === "C") {
    feelsLike.textContent = `${data.current.feelslike_c} °C`;
} else {
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