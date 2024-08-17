"use strict";

// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };
// const a = prompt("Один из последних просмотренных фильмов?", ""),
//   b = prompt("На сколько оцените его?", ""),
//   c = prompt("Один из последних просмотренных фильмов?", ""),
//   d = prompt("На сколько оцените его?", "");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;
// console.log(personalMovieDB);

// if (4 == 9) {
//   console.log("ok");
// } else {
//   console.log("error");
// }

// const num = 50;
// if (num < 49) {
//   console.log("Error");
// } else if (num > 100) {
//   console.log("Много");
// } else {
//   console.log("Все ОК");
// }
// console.log(num === 50 ? "yes" : "no");

// num === 50 ? console.log("yes") : console.log("no");

// switch (num) {
//   case 49:
//     console.log("Неверно");
//     break;
//   case 100:
//     console.log("Неверно");
//     break;
//   case 50:
//     console.log("В точку");
//     break;
//   default:
//     console.log("Не в этот раз");
//     break;
// }

let num = 20;
function showFirstMessage(text) {
  console.log(text);
  num = 10;
}
showFirstMessage("Hello");
console.log(num);

// function calc(a, b) {
//   return a + b;
// }
// console.log(calc(3, 4));
// console.log(calc(6, 5));

//function declaration
function ret() {
  let num = 50;
  return num;
}
const anotherNum = ret();
console.log(anotherNum);

//function expression
const logger = function () {
  console.log("Hello");
};
logger();

//стрелочная функция
const calc = (a, b) => {
  return a + b;
};
console.log(calc(2, 5));
