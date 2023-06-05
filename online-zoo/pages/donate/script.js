//Скрипт меню
document.querySelector(".menu__img").addEventListener("click", showMenu);
document.querySelector(".close").addEventListener("click", showMenu);
document.querySelector(".menu .darkest-block").addEventListener("click", showMenu);

function showMenu() {
    if (document.querySelector(".menu__nav").classList.contains("display-none")) {
      document.querySelector(".menu__nav").classList.remove("display-none");
      document.querySelector(".menu .darkest-block").classList.remove("display-none");
    setTimeout(() => {
      document.querySelector(".menu__nav").classList.remove("opacity-none");
      document.querySelector(".menu .darkest-block").classList.remove("opacity-none");
    },10);
    } else {
      document.querySelector(".menu__nav").classList.add("opacity-none");
      document.querySelector(".menu .darkest-block").classList.add("opacity-none");
    setTimeout(() => {
      document.querySelector(".menu__nav").classList.add("display-none");
      document.querySelector(".menu .darkest-block").classList.add("display-none");
    },500);
    }      
}





//Скрипт для изменения значения инпута при нажатии на сумму
let labels = document.querySelectorAll(".radio__label");
let input = document.querySelector(".donate__input");
for (key of labels) {
    key.addEventListener("click", changeInput);
}


//Изменение значения в input при нажатии на label и изменение рамки
function changeInput() {
    input.value = this.children[0].value;
    input.setAttribute("value", this.children[0].value);
    changeBorder(this);
}

//Рамка для label
function changeBorder(label) {
    for (key of labels) {
        key.classList.remove("label__border");
    }
    label.classList.add("label__border");
}


//Скрипт изменения радиобаттонов при введении значения в инпут
input.addEventListener("input", changeRadio);

let radioButtons = document.querySelectorAll(".radio");

function changeRadio(e) {
    if (e.target.value.length > 4) {
        e.target.value = e.target.value.slice(0, e.target.value.length-1);
        return;
    }
    input.setAttribute("value", e.target.value);
    let radioValue = Array.from(radioButtons).find((item) => {
        return (e.target.value == item.value);
    }); //Ищем, есть ли введенное значение в списке
    if (radioValue) {
        radioValue.checked = true;
        changeBorder(radioValue.parentElement);
    } else {
        for (key of radioButtons) {
            key.parentElement.classList.remove("label__border");
            key.checked = false;
        }
    }
}

