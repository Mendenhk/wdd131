// //next: add api weather data to page

// /*Visual crossing weather API for extracting temp, conditions, and wind speed*/
// const API_KEY = "QFQWFF8ERZY3CTXNENCCGK6BF";
// const LOCATION = "Phnom Penh,Cambodia";

// const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(
//   LOCATION
// )}?unitGroup=metric&include=current&key=${API_KEY}&contentType=json`;

// //async fiunction allows other functions to run while it is processing - doesn't lock up the page
// async function getWeather() {

//   //try works together with catch to deal with errors rather than crashing the system
//   try {
//     //await pauses the function until data arrives.
//     const response = await fetch(url);

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     //await pauses the function until data arrives.
//     const data = await response.json();

//     const current = data.currentConditions;

//     const temperature = current.temp;
//     const conditions = current.conditions;
//     const windSpeed = current.windspeed;

//     console.log(`Temperature: ${temperature} °C`);
//     console.log(`Conditions: ${conditions}`);
//     console.log(`Wind Speed: ${windSpeed} km/h`);

//     //adding above temp, cond, and windspeed to the HTML, and thus the page

//   } catch (error) {
//     console.error("Error fetching weather data:", error);
//   }
// }

// getWeather();



// /*Wind Chill – only runs on pages that have .wind-chill*/
// const windChillElement = document.querySelector('.wind-chill');
// if (windChillElement) {
//   // const temperature = 31;
//   // const windSpeed = 5;
//   let windChill;

//   if (temperature <= 10 && windSpeed > 4.8) {
//     windChill = calculateWindChill(temperature, windSpeed);
//   } else {
//     windChill = temperature;
//   }
//   windChillElement.textContent = `${windChill.toFixed(1)}°C`;
// }

// function calculateWindChill(temperature, windSpeed) {
//   return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
// }

/* Footer – current year + last modified (safe version)*/
const yearElement = document.querySelector("#currentYear");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const lastModifiedElement = document.querySelector("#lastModified");
if (lastModifiedElement) {
  lastModifiedElement.textContent = "Last Modification: " + document.lastModified;
}





// Hamburger Menu – always runs
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

if (hamButton && navigation) {
  hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
  });
}

// Fill the dropdown – only runs on pages that have #reference
document.addEventListener('DOMContentLoaded', () => {
  const select = document.querySelector('#reference');
  if (select) {
    const referrals = [
      { name: "Internet search", value: "internet" },
      { name: "AI search tool", value: "AI" },
      { name: "Friend/other referral", value: "referral" },
      { name: "Advertisement", value: "ad" },
      { name: "Your mother", value: "mom" }
    ];

    referrals.forEach(ref => {
      const option = document.createElement('option');
      option.value = ref.value;
      option.textContent = ref.name;
      select.appendChild(option);
    });
  }
});

/*Show More/Less Button-temple */
const templeParagraph = document.querySelector('.show-hide-temple');
const templeText = document.querySelector('.temple-text');
/* if statements added as my siteplan.html and contact.html gave errors.
 the javascript was trying to add eventlisteners to elements that don't exist
 on these pages*/
if (templeParagraph && templeText) {
  templeParagraph.addEventListener('click', () => {
    //adds or removes class.toggle="red-text", which is changed with CSS
    templeText.classList.toggle('temple-open');
    if (templeText.classList.contains('temple-open')) {
      templeParagraph.textContent = '↑Hide↑';
    } else {
      templeParagraph.textContent = '↓Show more↓';
    }
  });
}

/*Show More/Less Button-park */
const parkParagraph = document.querySelector('.show-hide-park');
const parkText = document.querySelector('.park-text');

if (parkParagraph && parkText) {
  parkParagraph.addEventListener('click', () => {
    //adds or removes class.toggle="red-text", which is changed with CSS
    parkText.classList.toggle('park-open');
    if (parkText.classList.contains('park-open')) {
      parkParagraph.textContent = '↑Hide↑';
    } else {
      parkParagraph.textContent = '↓Show more↓';
    }
  });
}

/*Show More/Less Button-fcity */
const fcityParagraph = document.querySelector('.show-hide-fcity');
const fcityText = document.querySelector('.fcity-text');

if (fcityParagraph && fcityText) {
  fcityParagraph.addEventListener('click', () => {
    //adds or removes class.toggle="red-text", which is changed with CSS
    fcityText.classList.toggle('fcity-open');
    if (fcityText.classList.contains('fcity-open')) {
      fcityParagraph.textContent = '↑Hide↑';
    } else {
      fcityParagraph.textContent = '↓Show more↓';
    }
  });
}


