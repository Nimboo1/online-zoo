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



//Скрипт попап карточки
let testimonials = document.querySelectorAll(".testimonials__card");
for (let i = 0; i < testimonials.length; i++) {
   testimonials[i].addEventListener("click", showPopup);
}

//открытие
function showPopup() {
    if (document.documentElement.clientWidth > 999) return;
    this.classList.add("testimonials__card-popup");
    document.querySelector(".testimonials__card-bg").classList.remove("display-none");
}

//закрытие
document.querySelector(".testimonials__card-bg").addEventListener("click", closePopup);
document.querySelector(".close-popup").addEventListener("click", closePopup);

function closePopup() {
    Array.from(testimonials).find((item) => {
        return item.classList.contains("testimonials__card-popup");
    }).classList.remove("testimonials__card-popup");
    document.querySelector(".testimonials__card-bg").classList.add("display-none");
}



//Скрипт слайдера отзывов
const desktopWidth = 1600;
const smallDWidth = 1000;
const testimonialsContainer = document.querySelector(".testimonials__container-slide");
const progressBar = document.querySelector(".testimonials__progress");

progressBar.addEventListener("input", testimonialsShift);

function testimonialsShift() {
  if (document.documentElement.clientWidth < smallDWidth) return;
  let shift = (document.documentElement.clientWidth < desktopWidth) ? 293+30 : 268+29;
  shift *= this.value;
  testimonialsContainer.style.transform = "translate("+ -shift +"px)";
}