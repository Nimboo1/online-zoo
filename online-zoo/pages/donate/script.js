console.log(1);
let label = document.querySelectorAll(".radio__label");
for (key of label) {
    key.addEventListener("click", showBorder);
}

console.log(label);

function showBorder() {
    for (key of label) {
        key.classList.remove("label__border");
    }
    this.classList.add("label__border");
}