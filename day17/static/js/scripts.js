const bands = [
    'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil',
    'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State',
    'We Came as Romans', 'Counterparts', 'Oh, Sleeper',
    'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'
];

function remArticles(bandName) {
    return bandName.replace(/^(the |a |an )/i, "").trim();
}

const sortedNames = bands.sort((a, b) => remArticles(a) > remArticles(b) ? 1 : -1);

document.querySelector("#bands").innerHTML = sortedNames.map(band => `<li>${band}</li>`).join("");

console.log(sortedNames);