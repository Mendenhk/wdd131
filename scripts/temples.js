



/*Changes the footer text*/
const today = new Date();
const year = document.querySelector("#currentYear");
year.innerHTML = `${today.getFullYear()}`

const lastModified = document.querySelector("#lastModified");
lastModified.innerHTML = `Last Modification: ${document.getElementById("lastModified").innerHTML = document.lastModified}`;

/*The hamburger effect*/
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});