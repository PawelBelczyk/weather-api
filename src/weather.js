
export async function getWeather(city) {

const API = "579307d8e2fe4e8fb4582945260907"    

const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API}&q=${city}`);
const data = await response.json();
return data;

}

// weather.js odpowiada tylko i wyłącznie za komunikację z api.0