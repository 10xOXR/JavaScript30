/* Create array of US cities with demographic data */

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];

fetch(endpoint)
    .then(dataBlob => dataBlob.json())
    .then(data => cities.push(...data));

/* Find and display user's current location */

const country = document.getElementById("country");
const city = document.getElementById("city");
let latitude = 0;
let longitude = 0;

function callback(data) {
    country.innerHTML = data.country_name;
    city.innerHTML = data.city;
    latitude = data.latitude;
    longitude = data.longitude;
}

const geoScript = document.createElement('script');
geoScript.src = 'https://geoip-db.com/json/geoip.php?jsonp=callback';
const scripts = document.getElementsByTagName('script')[0];
scripts.parentNode.insertBefore(geoScript, scripts);

/* Find and display matches to user input */

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

searchInput.addEventListener("keyup", displayMatches);

function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
        const regex = new RegExp(wordToMatch, "gi")
        return place.city.match(regex) || place.state.match(regex)
    });
}

function displayMatches() {
    const matchArray = findMatches(this.value, cities);
    const distArray = matchArray.map(city => ({...city, distance: parseInt(getDistance(latitude, longitude, city.latitude, city. longitude).toFixed(0))}));
    const sortedArray = distArray.sort((a, b) => a.distance > b.distance ? 1 : -1)
    console.log(sortedArray);
    const html = sortedArray.map(place => {
        const regex = new RegExp(this.value, "gi");
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
        return `
        <li>
            <span class="name">${cityName}, ${stateName}</span>
            <span class="population">Pop: ${numWithCommas(place.population)}</span>
            <span class="population">Dist: ${numWithCommas(place.distance)} km</span>
        </li>
        `;
    }).join("");

    suggestions.innerHTML = html;
}

function numWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/**
    * Functions to calculate distance between two points from
    * https://stackoverflow.com/questions/18883601/function-to-calculate-distance-between-two-coordinates
*/

function getDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in km
    return d;
}

function deg2rad(deg) {
    return deg * (Math.PI / 180)
}