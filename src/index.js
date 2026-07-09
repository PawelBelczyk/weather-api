// const { use } = require("react");
import {getWeather} from "./weather.js"

const weatherForm = document.getElementById("weather-form");
const userInput = document.getElementById("user-input");

weatherForm.addEventListener("submit",(e) => {
    e.preventDefault();
    getWeather(userInput.value);
    
});