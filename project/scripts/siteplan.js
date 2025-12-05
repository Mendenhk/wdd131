
//Wind Chill – only runs on pages that have .wind-chill
const windChillElement = document.querySelector('.wind-chill');
if (windChillElement) {
    const temperature = 31;
    const windSpeed = 5;
    let windChill;

    if (temperature <= 10 && windSpeed > 4.8) {
        windChill = calculateWindChill(temperature, windSpeed);
    } else {
        windChill = temperature;
    }
    windChillElement.textContent = `${windChill.toFixed(1)}°C`;
}

function calculateWindChill(temperature, windSpeed) {
    return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
}

// Footer – current year + last modified (safe version)
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