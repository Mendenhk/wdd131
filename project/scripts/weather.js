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

    temperature.textContent = `${vcTemperature}°C`

  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

getWeather();



/*Wind Chill – only runs on pages that have .wind-chill*/
const windChillElement = document.querySelector('.wind-chill');
  const temperature = 31;
  const windSpeed = 5;
  let windChill;

  if (temperature <= 10 && windSpeed > 4.8) {
    windChill = calculateWindChill(temperature, windSpeed);
  } else {
    windChill = temperature;
  }
  windChillElement.textContent = `${windChill.toFixed(1)}°C`;

function calculateWindChill(temperature, windSpeed) {
  return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
}