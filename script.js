"use strict";

console.log("Hello, World!");
// let num = 50;
// while (num < 55) {
//   console.log(num);
//   num++;
// }

// for (let i = 10; i < 15; i++) {
//   if (i === 13) {
//     break;
//   }
//   console.log(i);
// }

// for (let i = 0; i < 10; i++) {
//   console.log(i);
//   for (let j = 0; j < 10; j++) {
//     console.log(j);
//   }
// }

//*
//**
//***
//****
//*****
//******
// let result = "";
// const lenght = 8;
// for (let i = 1; i < lenght; i++) {
//   for (let j = 0; j < i; j++) {
//     result += "*";
//   }
//   result += "\n";
// }
// console.log(result);

// let result = "";
// const lenght = 5;

// first: for (let i = 1; i < lenght; i++) {
//   console.log(`First level: ${i}`);
//   for (let j = 0; j < i; j++) {
//     console.log(`Second level: ${j}`);
//     for (let k = 0; k < j; k++) {
//       if (k === 2) continue first;
//       console.log(`Third level: ${k}`);
//     }
//     // result += "*";
//   }
//   // result += "\n";
// }
// console.log(result);

// function firstTask() {
//   for (let num = 5; num <= 10; num++) {
//     console.log(`${num}`);
//   }
// }
// firstTask();

// function firstTask() {
//   let num = 5;

//   while (num <= 10) {
//     console.log(`${num}`);
//     num++;
//   }
// }
// firstTask();

// function secondTask() {
//   for (let num2 = 20; num2 >= 10; num2--) {
//     if (num2 === 13) break;
//     console.log(`${num2}`);
//   }
// }
// secondTask();

// function thirdTask() {
//   for (let num3 = 2; num3 <= 10; num3 += 2) {
//     console.log(`${num3}`);
//   }
// }
// thirdTask();

// for (let i = 2; i <= 16; i++) {
//   if (i % 2 === 0) {
//     continue;
//   } else {
//     console.log(i);
//   }
// }

// let i = 2;
// while (i <= 16) {
//   if (i % 2 === 0) {
//     i++;
//     continue;
//   } else {
//     console.log(i);
//     i++;
//   }
// }

// function fifthTask() {
//   const arrayOfNumbers = [];

//   for (let i = 5; i <= 10; i++) {
//     arrayOfNumbers[i - 5] = i;
//   }

//   console.log(fifthTask());
//   return arrayOfNumbers;
// }
// fifthTask();
/*
Заполните новый массив (result) числами из старого (arr). Количество элементов в массиве можно получить как arr.length, а к элементам обращаемся все так же: arr[0], arr[1] и тд. */

// function firstTask() {
//   const arr = [3, 5, 8, 16, 20, 23, 50];
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result[i] = arr[i];
//   }
//   return result;
// }
// firstTask();

// Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done".
// Для определения типа данных используйте typeof();
// Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]

// function secondTask() {
//   // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//   const data = [5, 10, "Shopping", 20, "Homework"];
//   for (let i = 0; i < data.length; i++) {
//     if (typeof data[i] === "number") {
//       data[i] *= 2;
//     } else {
//       data[i] += " - done";
//     }
//   }
//   console.log(data);
//   return data;
// }
// secondTask();

// Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
// Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]

// function thirdTask() {
//   const data = [5, 10, "Shopping", 20, "Homework"];
//   const result = [];

//   for (let i = data.length - 1; i >= 0; i--) {
//     result[data.length - 1 - i] = data[i];
//   }

//   console.log(result);
//   return result;
// }

// thirdTask();

//      *
//     ***
//    *****
//   *******
//  *********
// ***********

const lines = 6;
let result = "";

for (let i = 1; i <= lines; i++) {
  // Добавляем пробелы
  for (let j = 1; j <= lines - i; j++) {
    result += " ";
  }
  // Добавляем звездочки
  for (let k = 0; k < 2 * i - 1; k++) {
    result += "*";
  }
  result += "\n";
}

console.log(result);
