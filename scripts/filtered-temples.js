/*Array of temples copied and pasted from assignment page*/ 
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, UT, USA",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, UT, USA",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, MD, USA",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41010,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-66076.jpg"
  },
  {
    templeName: "Paris France",
    location: "Paris, France",
    dedicated: "2017, May, 21",
    area: 44175,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-2056.jpg"
  },
  {
    templeName: "Phnom Penh Cambodia",
    location: "Phnom Penh, Cambodia",
    dedicated: "Not Yet Dedicated",
    area: 10000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/phnom-penh-cambodia-temple/phnom-penh-cambodia-temple-7340.jpg"
  }
];

/*JavaScript to create temple cards and fill the html */
// const templeCardArray = [];

/*the following was my initial attempt at the code before watching the video */
// createTempleCardMe();

// function createTempleCardMe() {
//     temples.forEach(temple => {
//     templeCard += `<h2>${temple.templeName}</h2>
//     <p><span>Location: </span>${temple.location}</p>
//     <p><span>Dedicated: </span>${temple.dedicated}</p>
//     <p><span>Size: </span>${temple.area} sq ft</p>
//     <figure><img src="${temple.imageUrl}" alt="${temple.templeName} temple" loading="lazy"></img></figure>`
//     });
//   }

const templeContainer = document.querySelector('.temple-cards-grid');
const homeButton = document.querySelector('#home');
const oldTemplesButton = document.querySelector('#old_temples');
const newTemplesButton = document.querySelector('#new_temples');
const largeTemplesButton = document.querySelector('#large_temples');
const smallTemplesButton = document.querySelector('#small_temples');

/*my first attempt at addEventListener*/
// let filteredTempleArray = [];
// oldTemplesButton.addEventListener('click', () => {
//   temples.forEach((temple) => {
//     if (temple.dedicated < 1900) {
//       filteredTempleArray.push(temple);
//     }
//   })
//   createTempleCard(filteredTempleArray);
// });

createTempleCard(temples);

homeButton.addEventListener('click', () => {
  document.querySelector('h1').textContent = 'Home';
  createTempleCard(temples);
});

oldTemplesButton.addEventListener('click', () => {
  templeContainer.innerHTML = '';
  document.querySelector('h1').innerHTML = 'Old Temples<br>Dedicated Before 1900';
  let old = temples.filter(temple => {
    let year = parseInt(temple.dedicated);
    return year < 1900;
  });
  createTempleCard(old);
});

newTemplesButton.addEventListener('click', () => {
  templeContainer.innerHTML = '';
  document.querySelector('h1').innerHTML = 'New Temples<br>Dedicated after 2000';
  let newTemple = temples.filter(temple => {
    let year = parseInt(temple.dedicated);
    return year > 2000;
  });
  createTempleCard(newTemple);
});

largeTemplesButton.addEventListener('click', () => {
  templeContainer.innerHTML = '';
  document.querySelector('h1').innerHTML = 'Large Temples<br>larger than 90,000ft-sq';
  let large = temples.filter(temple => temple.area > 90000);
  createTempleCard(large);
});

smallTemplesButton.addEventListener('click', () => {
  templeContainer.innerHTML = '';
  document.querySelector('h1').innerHTML = 'Small Temples<br>smaller than 10,000ft-sq';
  let small = temples.filter(temple => temple.area < 10000);
  createTempleCard(small);
});

// const templeCard = [];

function createTempleCard(filteredTemples) {
  filteredTemples.forEach(temple => {
    //creates all of the desired nodes (elements) ans stores them.
    let card = document.createElement("section"); 
    let name = document.createElement("h3"); 
    let location = document.createElement("p"); 
    let dedication = document.createElement("p");
    let area = document.createElement("p"); 
    let img = document.createElement("img");

    //adds text, temple strings, and attributes to the saved nodes (elements)
    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedication.innerHTML = `<span class="label">Dedicated: </span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");

    //card is the variable holding the section container defining each card;
    //this adds/appends each element within the section one after another.  
    card.appendChild(name); 
    card.appendChild(location); 
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    document.querySelector(".temple-cards-grid").appendChild(card);
    //return card;
  });
}

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