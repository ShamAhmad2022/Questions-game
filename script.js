"use strict";

const closeButton = document.getElementById("close");
const closeButton2 = document.getElementById("close2");
const modalContiner = document.getElementById("modal-container");
const modalContiner2 = document.getElementById("modal-container-yay");
const color = document.getElementById("color");
const question = document.getElementById("question");
const yay = document.getElementById("yay");
const wheelst = document.getElementById("wheelst");
const truebtn = document.getElementById("truebtn");
const falsebtn = document.getElementById("falsebtn");
const celebImg = document.getElementById("celeb-img");
const wrongImg = document.getElementById("wrong-img");

const yellow = document.getElementById("yellow");
const blue = document.getElementById("blue");
const pink = document.getElementById("pink");
const orange = document.getElementById("orange");
const purple = document.getElementById("purple");
const green = document.getElementById("green");
const red = document.getElementById("red");

let selectedColor = "";
const colorsArray = [];

function shuffle(array) {
  let currentIndex = array.length;
  let randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[currentIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function spin() {

  wheelst.play();
  celebImg.style.animation = 'none';
  wrongImg.style.animation = 'none';

  const box = document.getElementById("box");
  const element = document.getElementById("mainbox");
  let selectedITem = "";

  let one = shuffle([1890, 2250, 2610]);
  let two = shuffle([1850, 2210, 2570]);
  let three = shuffle([1790, 2150, 2310]);
  // let three = shuffle([1770, 2130, 2490]);
  let four = shuffle([1810, 2170, 2530]);
  let five = shuffle([1750, 2110, 2470]);
  let six = shuffle([1630, 1990, 2350]);
  let seven = shuffle([1570, 1930, 2290]);
  // let eight = shuffle([]);
  // let nine = shuffle([]);
  // let ten = shuffle([]);

  let results = shuffle([
    one[0],
    two[0],
    three[0],
    four[0],
    five[0],
    six[0],
    seven[0],
  ]);

  // 1
  if (one.includes(results[0])) {
    selectedITem = "كيفية تشغيل برنامج Microsoft movie maker على جهاز الحاسوب (شفوي وعملي)";
    selectedColor = "Yellow";
  }

  // 2
  if (two.includes(results[0])) {
    selectedITem = "عددي مميزات برنامج صانع الأفلام (شفوي)";
    selectedColor = "Blue";
  }

  // 3
  if (three.includes(results[0])) {
    selectedITem = "أشيري إلى نافذة مهام الفيلم واذكري كيفية إظهارهذه النافذة (عملي)";
    selectedColor = "Pink";
  }

  // 4
  if (four.includes(results[0])) {
    selectedITem =
    "يقسم شريط المشروع إلى جزئين، اذكريهما مع توضيح فائدتهما (شفوي)";
    selectedColor = "Orange";
  }

  // 5
  if (five.includes(results[0])) {
    selectedITem = "احفظي ملف كفيلم وملف اخر ك مشروع (عملي)";
    selectedColor = "Purple";
  }

  // 6
  if (six.includes(results[0])) {
    selectedITem = "اسردي اربع صور إلى لوحة العمل في الأسفل (عملي)";
    selectedColor = "Green";
  }

  // 7
  if (seven.includes(results[0])) {
    selectedITem = "أشيري إلى نافذة العرض واستخدمي الأزرار الآتية: زر التشغيل، زر تقديم الفيلم إلى نهايته، زر إرجاع الفيلم أجزاء صغيرة من المقطع";
    selectedColor = "Red";
  }

  // console.log(selectedColor);
  switch (selectedColor) {
    case "Red":
      color.classList.add("red");
      color.classList.remove("green");
      color.classList.remove("purple");
      color.classList.remove("orange");
      color.classList.remove("pink");
      color.classList.remove("blue");
      color.classList.remove("yellow");
      break;
    case "Green":
      color.classList.add("green");
      color.classList.remove("red");
      color.classList.remove("purple");
      color.classList.remove("orange");
      color.classList.remove("pink");
      color.classList.remove("blue");
      color.classList.remove("yellow");
      break;
    case "Purple":
      color.classList.add("purple");
      color.classList.remove("green");
      color.classList.remove("red");
      color.classList.remove("orange");
      color.classList.remove("pink");
      color.classList.remove("blue");
      color.classList.remove("yellow");
      break;
    case "Orange":
      color.classList.add("orange");
      color.classList.remove("green");
      color.classList.remove("purple");
      color.classList.remove("red");
      color.classList.remove("pink");
      color.classList.remove("blue");
      color.classList.remove("yellow");
      break;
    case "Pink":
      color.classList.add("pink");
      color.classList.remove("green");
      color.classList.remove("purple");
      color.classList.remove("orange");
      color.classList.remove("red");
      color.classList.remove("blue");
      color.classList.remove("yellow");
      break;
    case "Blue":
      color.classList.add("blue");
      color.classList.remove("green");
      color.classList.remove("purple");
      color.classList.remove("orange");
      color.classList.remove("pink");
      color.classList.remove("red");
      color.classList.remove("yellow");
      break;
    case "Yellow":
      color.classList.add("yellow");
      color.classList.remove("green");
      color.classList.remove("purple");
      color.classList.remove("orange");
      color.classList.remove("pink");
      color.classList.remove("blue");
      color.classList.remove("red");
      break;
  }

  color.innerText = selectedColor;
  question.innerText = selectedITem;

  box.style.setProperty("transition", "all ease 5s");
  box.style.transform = "rotate(" + results[0] + "deg)";
  element.classList.remove("animate");
  setTimeout(() => {
    element.classList.add("animate");
  }, 5000);

  setTimeout(() => {
    switch (selectedColor) {
      case "Red":
        red.style.filter = "brightness(100%)";
        if (!colorsArray.includes("Red")) colorsArray.push("Red");
        break;
      case "Green":
        green.style.filter = "brightness(100%)";
        if (!colorsArray.includes("Green")) colorsArray.push("Green");
        break;
      case "Purple":
        purple.style.filter = "brightness(100%)";
        if (!colorsArray.includes("Purple")) colorsArray.push("Purple");
        break;
      case "Orange":
        orange.style.filter = "brightness(100%)";
        if (!colorsArray.includes("Orange")) colorsArray.push("Orange");
        break;
      case "Pink":
        pink.style.filter = "brightness(100%)";
        if (!colorsArray.includes("Pink")) colorsArray.push("Pink");
        break;
      case "Blue":
        blue.style.filter = "brightness(100%)";
        if (!colorsArray.includes("Blue")) colorsArray.push("Blue");
        break;
      case "Yellow":
        yellow.style.filter = "brightness(100%)";
        if (!colorsArray.includes("Yellow")) colorsArray.push("Yellow");
        break;
    }

    modalContiner.classList.add("show");
  }, 5500);

  setTimeout(() => {
    box.style.setProperty("transition", "initial");
    box.style.transform = "rotate(90deg)";
  }, 6000);

}

closeButton.addEventListener("click", () => {
    modalContiner.classList.remove("show");
    if (colorsArray.length === 7) {
        modalContiner2.classList.add("show");
        yay.play();
    }
});

closeButton2.addEventListener("click", () => {
    modalContiner2.classList.remove("show");
});

truebtn.addEventListener("click", () => {
    celebImg.style.animation = 'rightAnswer 3s ease';
});

falsebtn.addEventListener("click", () => {
    wrongImg.style.animation = 'wrongAnswer 3s ease';
});
