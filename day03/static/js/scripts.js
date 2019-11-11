
const inputs = document.querySelectorAll(".controls input");

function handleUpdate() {
    const suffix = this.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener("change", handleUpdate));

inputs.forEach(input => input.addEventListener("mousedown", () => {
    inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));
}));

inputs.forEach(input => input.addEventListener("mouseup", () => {
    inputs.forEach(input => input.removeEventListener("mousemove", handleUpdate));
}));
