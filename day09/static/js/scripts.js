const cats = [{
        name: "Bush-Kitteh",
        age: 4
    },
    {
        name: "Earless",
        age: 3
    }
];

function makeGreen() {
    const p = document.querySelector("p");
    p.style.color = "#BADA55";
    p.style.fontSize = "50px";
}

// Regular

console.log("Hello");

// Interpolated

console.log("Hello I am a %s string!", "🐻");

// Styled

// console.log("%c I am some great text", "font-size:50px; background:red; text-shadow: 10px 10px 0 blue")

// Warning

console.warn("BOO HISS BOO!");

// Error :|

console.error("Crap!");

// Info

console.info("Bears are people, too!");

// Testing

const p = document.querySelector("p");

console.assert(p.classList.contains("Bush-Kitteh"), "No kittehs here!");

// Clear console

// console.clear();

// Viewing DOM Elements

console.log(p);
console.dir(p);

// Grouping

cats.forEach(cat => {
    console.groupCollapsed(`${cat.name}`);
    console.log(`This is ${cat.name}`);
    console.log(`${cat.name} is ${cat.age} years old`);
    console.log(`${cat.name} is ${cat.age * 7} cat years old`);
    console.groupEnd(`${cat.name}`);
});

// Counting

console.count("Tim");
console.count("Tim");
console.count("Chris");
console.count("Chris");
console.count("Tim");
console.count("Tim");
console.count("Chris");
console.count("Chris");
console.count("Chris");

// Timing

console.time("Fetching GitHub Data");
fetch("https://api.github.com/users/10xOXR")
    .then(data => data.json())
    .then(data => {
        console.timeEnd("Fetching GitHub Data");
        console.log(data);
    });

// Tables

console.table(cats);
