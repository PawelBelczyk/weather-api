// const { use } = require("react");
import {getWeather} from "./weather.js"

const weatherForm = document.getElementById("weather-form");
const userInput = document.getElementById("user-input");

weatherForm.addEventListener("submit", async (e) => {
    e.preventDefault();
   const data = await getWeather(userInput.value);
   console.log(data);
   
   const location = document.getElementById("location");
   const temperature = document.getElementById("temperature");
   const feelsLike = document.getElementById("feelsLike");
   const humidity = document.getElementById("humidity");
   const wind = document.getElementById("wind");
   const description = document.getElementById("description");
   const weather = document.getElementById("weather-icon");
   
   // weather-icon.src = `https:${data.current.condition.icon}`;
   // weather-icon.hidden = false;
   
   location.textContent = data.location.name;
   temperature.textContent = `${data.current.temp_c} °C`;
   feelsLike.textContent = `${data.current.feelslike_c} °C`;
   humidity.textContent = `${data.current.humidity}%`;
   wind.textContent = `${data.current.wind_kph} km/h`;
   description.textContent = data.current.condition.text;
   weather.src = `https:${data.current.condition.icon}`;
   weather.hidden = false;
    
});
