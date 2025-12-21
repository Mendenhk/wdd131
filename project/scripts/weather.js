//next: add api weather data to page

/*Visual crossing weather API for extracting temp, conditions, and wind speed*/
const API_KEY = "QFQWFF8ERZY3CTXNENCCGK6BF";
const LOCATION = "Phnom Penh,Cambodia";

const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(
  LOCATION
)}?unitGroup=metric&include=current&key=${API_KEY}&contentType=json`;

//async fiunction allows other functions to run while it is processing - doesn't lock up the page
async function getWeather() {

  //try works together with catch to deal with errors rather than crashing the system
  try {
    //await pauses the function until data arrives.
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    //await pauses the function until data arrives.
    const data = await response.json();

    const current = data.currentConditions;

    const vcTemperature = current.temp;
    const vcConditions = current.conditions;
    const vcWindSpeed = current.windspeed;

    console.log(`Temperature: ${vcTemperature} °C`);
    console.log(`Conditions: ${vcConditions}`);
    console.log(`Wind Speed: ${vcWindSpeed} km/h`);

    //adding above temp, cond, and windspeed to the HTML, and thus the page
    const temperature = document.querySelector('.temperature');
    const conditions = document.querySelector('.conditions');
    const windSpeed = document.querySelector('.windSpeed');
    const windChillElement = document.querySelector('.wind-chill');
    let windChill;

    temperature.textContent = `${vcTemperature}°C / ${((vcTemperature * 9/5) +35).toFixed(1)}°F`
    conditions.textContent = `${vcConditions}`;
    windSpeed.textContent = `${vcWindSpeed} km/h / ${(vcWindSpeed * 0.621371).toFixed(1)} mph`;

    if (vcTemperature <= 10 && vcWindSpeed > 4.8) {
    windChill = calculateWindChill(vcTemperature, vcWindSpeed);
    } else {
    windChill = vcTemperature;
    }
    windChillElement.textContent = `${windChill.toFixed(1)}°C`;

    const svgElement = document.querySelector('.weatherSVG');
    svgElement.src = getWeatherSVG(vcConditions);
    svgElement.alt = vcConditions;

  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

getWeather();



function calculateWindChill(temperature, windSpeed) {
  return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
}



/*-------------------- Weather svg's ---------------------*/

const conditionsSVG = {
    thunder: "images/thunder.svg",
    rain: "images/rain.svg",
    partly: "images/partly.svg",
    cloud: "images/cloudy.svg",
    clear: "images/clear.svg",
    fog: "images/fog.svg",
    default: "images/default.svg"
}

//in this function, "includes" is used because the weather api has many types of conditions.
//this serves to cover all types with as little code as possible.
function getWeatherSVG(conditions) {
  if (conditions.includes("Thunder")) return conditionsSVG.thunder;
  if (conditions.includes("Rain")) return conditionsSVG.rain;
  if (conditions.includes("Partly")) return conditionsSVG.partly;
  if (conditions.includes("Cloud") || conditions.includes("Overcast")) return conditionsSVG.cloud;
  if (conditions.includes("Clear") || (conditions.includes("Sun"))) return conditionsSVG.clear;
  if (conditions.includes("Fog") || conditions.includes("Mist")) return conditionsSVG.fog;
  return conditionsSVG.fog;
}