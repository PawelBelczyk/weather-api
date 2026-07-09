// const { use } = require("react");
import {getWeather} from "./weather.js";
import {displayWeather, clearWeather} from "./dom.js";

let unit ="C";
 let currentWeather = null;



const weatherForm = document.getElementById("weather-form");
const userInput = document.getElementById("user-input");
const message = document.getElementById("message");

const celsiusBtn = document.getElementById("celsius");
const fahrenheitBtn = document.getElementById("fahrenheit");



weatherForm.addEventListener("submit", async (e) => {
    e.preventDefault();
  
  try { 
    message.textContent="Loading...";
    const data = await getWeather(userInput.value);
    currentWeather = data;
    message.textContent ="";
     displayWeather(data, unit);

  } catch (error) {
    clearWeather();    
    message.textContent = error.message;
    
  }
    
});


celsiusBtn.addEventListener("click", () => {
    unit = "C";

    if (currentWeather) {
        displayWeather(currentWeather, unit);
    }
});


fahrenheitBtn.addEventListener("click", () => {
    unit = "F";

    if (currentWeather) {
        displayWeather(currentWeather, unit);
    }
});

console.log(unit);


