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
//----------------------------------
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
//----------------------------------
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

// const hamburger = 3;
// const fries = 1;
// const cola = 0;

// console.log(1 && 0);

// console.log(1 && 5);

// console.log(null && 5);

// if (hamburger === 3 && cola && fries) {
//   console.log("Мы сыты");
// } else {
//   console.log("Мы голодны,уходим");
// }
// console.log(hamburger && fries);

const hamburger = 0;
const fries = 3;
const cola = 0;
const nuggets = 2;

if ((hamburger === 3 && cola === 2) || (fries === 3 && nuggets)) {
  console.log("Мы довольны");
} else {
  console.log("Мы голодны,уходим");
}

console.log((hamburger === 3 && cola === 2) || (fries === 3 && nuggets));

//----------------------------------

let johnReport,
  markReport,
  maryReport = "done";

console.log(johnReport || markReport || maryReport);

//----------------------------------

console.log(NaN || 2 || undefined);

console.log(NaN && 2 && undefined);

console.log(1 && 2 && 3);

console.log((!1 && 2) || !3);

console.log(25 || (null && !3));

console.log(NaN || null || !3 || undefined || 5);

console.log(NaN || (null && !3 && undefined) || 5);

console.log((5 === 5 && 3 > 1) || 5);
