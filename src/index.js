// const { use } = require("react");
import {getWeather} from "./weather.js";
import {displayWeather, clearWeather} from "./dom.js";

const weatherForm = document.getElementById("weather-form");
const userInput = document.getElementById("user-input");
const message = document.getElementById("message");

weatherForm.addEventListener("submit", async (e) => {
    e.preventDefault();
  
  try { 
    message.textContent="Loading...";
    const data = await getWeather(userInput.value);
    message.textContent ="";
    
    displayWeather(data);

  } catch (error) {
    clearWeather();    
    message.textContent = error.message;
    
  }
    
});

