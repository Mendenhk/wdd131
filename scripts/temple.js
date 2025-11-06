



/*Changes the footer text*/
const today = new Date();
const year = document.querySelector("#currentYear");
year.innerHTML = `${today.getFullYear()}`

const lastModified = document.querySelector("#lastModified");
lastModified.innerHTML = `Last Modification: ${document.getElementById("lastModified").innerHTML = document.lastModified}`;