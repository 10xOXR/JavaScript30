const inputs = document.querySelectorAll(`.inbox input[type="checkbox"]`);

inputs.forEach(input => input.addEventListener("click", checkChecker));

let lastChecked;

function checkChecker(e) {
    let betweeners = false;
    if (e.shiftKey && this.checked) {
        inputs.forEach(input => {
            if (input === this || input === lastChecked) {
                betweeners = !betweeners;
            }

            if (betweeners) {
                input.checked = true;
            }
        });
    }

    lastChecked = this;
}
