//calculating and entering wind chill factor
const temperature = 31;
const windSpeed = 5;
let windChill;
if (temperature <= 10 && windSpeed > 4.8) {
    windChill = calculateWindChill(temperature, windSpeed);
} else {
    windChill = temperature;
}

document.querySelector('.wind-chill').innerHTML = `${windChill}°C`

function calculateWindChill(temperature, windSpeed) {
    let windChill;
    windChill = 13.12 + 0.6215 * temperature - 11.37 * windSpeed ** 0.16 + 0.3965 * temperature * windSpeed ** 0.16
    return windChill;
}


//footer javaScript
const today = new Date();
const year = document.querySelector("#currentYear");
year.innerHTML = `${today.getFullYear()}`

const lastModified = document.querySelector("#lastModified");
lastModified.innerHTML = `Last Modification: ${document.getElementById("lastModified").innerHTML = document.lastModified}`;