const pressedKeys = [];
const konami = "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightbaEnter"

window.addEventListener("keyup", (e) => {
    pressedKeys.push(e.key)
    // pressedKeys.splice(-konami.length -1, pressedKeys.length - konami.length);
    pressedKeys.splice(-konami.length -1, pressedKeys.length - 11);

    if (pressedKeys.join("").includes(konami)) {
        cornify_add();
        console.log("Awesome!");
    }
    
    console.log(pressedKeys.join(""));
    console.log(pressedKeys);

})
