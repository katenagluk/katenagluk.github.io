'use strict';
// GALLERY
// показать подложку для слайдера
const cards = Array.from(document.querySelectorAll(".gallery__card"));
const slider = document.querySelector(".gallery_slider");
const sliderContainer = document.querySelector(".gallery_slider__container");
// массив с картинками
const picture = Array.from(document.querySelectorAll(".gallery__card__pic"));
// кнопки
const sliderBtnLeft = document.querySelector(".slider__btn_left");
const sliderBtnRight = document.querySelector(".slider__btn_right");
const sliderClose = document.querySelector(".gallery_slider__close");
// номер индекса ячейки
let cardIndex = -1;
let pictureFull;
let newPictureFull;
// обработчик событий для каждой картинки, чтобы:
// 1. показать подложку для слайдера
// 2. клонировать нужную картинку
for (const card of cards) {
  card.addEventListener("click", (event) => {
    event.preventDefault();
    cardIndex = cards.indexOf(card);
    // клонируем картинку с помощью cloneNode, которую вставляем в слайдер
    pictureFull = picture[cardIndex].cloneNode();
    pictureFull.style.objectFit = "contain";
    sliderContainer.append(pictureFull);
    // 1. добавляем класс активности 
    slider.classList.add("gallery_active");
  });
}
// обработчики событий для запуска функции перелистывания картинок
sliderBtnLeft.addEventListener("click", (event) => {
  event.preventDefault();
  changePicture("left");
});
sliderBtnRight.addEventListener("click", (event) => {
  event.preventDefault();
  changePicture("right");
});
// перелистывание картинок
function changePicture(dir) {
  if (dir === "left") {
    if (cardIndex > 0) {
      cardIndex--;
    } else {
      cardIndex = cards.length - 1;
    }
} else if (dir === "right") {
    if (cardIndex < cards.length - 1) {
      cardIndex++;
    } else {
      cardIndex = 0;
    }
}
  newPictureFull = picture[cardIndex].cloneNode();
  newPictureFull.style.objectFit = "contain";
  pictureFull.replaceWith(newPictureFull);
  pictureFull = newPictureFull;
}
// удаляем класс активности и картинку с помощью нажатия на крестик
sliderClose.addEventListener("click", (event) => {
  event.preventDefault();
  slider.classList.remove("gallery_active");
  pictureFull.remove();
  newPictureFull.remove();
});