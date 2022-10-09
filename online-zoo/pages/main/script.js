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
let card;
let testimonials = document.querySelectorAll(".testimonials__card");
let bg = document.querySelector(".testimonials__card-bg");
let darkbg = document.querySelector(".testimonials__card-darkbg");
for (let i = 0; i < testimonials.length; i++) {
   testimonials[i].addEventListener("click", showPopup);
}

//открытие
function showPopup() {
    if (document.documentElement.clientWidth > 999) return;
    card = this.cloneNode(true);
    card.classList.add("testimonials__card-popup");
    darkbg.classList.remove("display-none");
    bg.append(card);
    if (bg.offsetHeight > darkbg.offsetHeight) {
      bg.style.marginTop = bg.offsetHeight-darkbg.offsetHeight + 20 + "px";
    }
}

//закрытие
darkbg.addEventListener("click", closePopup);
document.querySelector(".close-popup").addEventListener("click", closePopup);

function closePopup() {
    darkbg.classList.add("display-none");
    bg.style.marginTop = "0";
    card.remove();
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




//Скрипт слайдера отзывов
const btnLeft = document.querySelector(".slider__button-left");
const btnRight = document.querySelector(".slider__button-right");

btnLeft.addEventListener("click", sliderShiftLeft);
btnRight.addEventListener("click", sliderShiftRight);
let flag = true;


//Перелистывание влево
function sliderShiftLeft() {
  if (!flag) return;
  flag = false;

  createSlide("left");

  let rowContainers = document.querySelectorAll(".row__container");
  console.log(rowContainers);

  for (key of rowContainers) {
    key.classList.add("container-transition");
  }
  setTimeout(() => {
    for (key of rowContainers) {
      key.classList.add("container-transformleft");
    }
  },50);
  console.log(rowContainers);

  setTimeout(() => {
    rowContainers[0].remove();
    rowContainers[1].classList.remove("container-transition");
    rowContainers[1].classList.remove("container-transformleft");
    flag = true;
  }, 700);
}

//Перелистывание вправо
function sliderShiftRight() {
  if (!flag) return;
  flag = false;

  createSlide("right");

  let rowContainers = document.querySelectorAll(".row__container");

  for (key of rowContainers) {
    key.classList.add("container-transformleft");
  }

  setTimeout(() => {
    for (key of rowContainers) {
      key.classList.add("container-transition");
    }
    rowContainers[0].classList.add("container-transformright");
    rowContainers[1].classList.add("container-transformright");
  }, 50);



  setTimeout(() => {
    rowContainers[0].classList.remove("container-transition");
    rowContainers[0].classList.remove("container-transformleft");
    rowContainers[0].classList.remove("container-transformright");
    rowContainers[1].remove();
    flag = true;
  }, 700);
}

//Создание нового слайда
const arrForShuffle = [0,1,2,3,4,5,6,7];
let sliderItems = document.querySelectorAll(".slider__item");
let containerWrapper = document.querySelector(".row__container-wrapper");

function createSlide(direction) {
  let rowContainer = document.createElement("div");
  rowContainer.classList.add("row__container");
  let sliderRow1 = document.createElement("div");
  sliderRow1.classList.add("slider__row");
  let sliderRow2 = document.createElement("div");
  sliderRow2.classList.add("slider__row");

  let shuffledArr = shuffleArr(arrForShuffle);
  for (let i = 0; i < 3; i++) {
    sliderRow1.append(sliderItems[shuffledArr[i]].cloneNode(true));
  } 
  for (let i = 3; i < 6; i++) {
    sliderRow2.append(sliderItems[shuffledArr[i]].cloneNode(true));
  } 

  rowContainer.append(sliderRow1);
  rowContainer.append(sliderRow2);

  if (direction == "left") {
    containerWrapper.append(rowContainer);
  } else {
    containerWrapper.prepend(rowContainer);
  }
}


//Перемешивание массива дл рандомизации порядка картинок
function shuffleArr(arr) {
  let i = arr.length;
  let j = 0;
  let temp;

  while (i--) {
    j = Math.floor(Math.random() * (i+1));
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}