/*Code for filling in the Product Name for the select */
const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

const select = document.querySelector('#product')

products.forEach(product => {
  const option = document.createElement('option');
  option.value = product.id;
  option.textContent = product.name;
  select.appendChild(option);
});

/*Changes the footer text*/
const today = new Date();
const year = document.querySelector("#currentYear");
year.innerHTML = `${today.getFullYear()}`

const lastModified = document.querySelector("#lastModified");
lastModified.innerHTML = `Last Modification: ${document.getElementById("lastModified").innerHTML = document.lastModified}`;