const divs = document.querySelectorAll("div");
const button = document.querySelector("button");

function logText(e) {
    console.log(this.classList.value);
    e.stopPropagation(); // stop bubbling up the DOM
}

divs.forEach(div => div.addEventListener("click", logText, {
    capture: false, // if true, run from the top of the DOM down
    once: false // run the function on the event listener once, then unbind
}));

button.addEventListener("click", () => {
    console.log("Clicked");
}, {
    once: true
})
