// const { use } = require("react");
import {getWeather} from "./weather.js";
import {displayWeather} from "./dom.js";

const weatherForm = document.getElementById("weather-form");
const userInput = document.getElementById("user-input");

weatherForm.addEventListener("submit", async (e) => {
    e.preventDefault();
   const data = await getWeather(userInput.value);
    
  displayWeather(data);
    
});

