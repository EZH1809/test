"use strict";
// function calculateVolumeAndArea(edgeLength) {
//   if (
//     typeof edgeLength !== "number" ||
//     !Number.isInteger(edgeLength) ||
//     edgeLength <= 0
//   ) {
//     return "При вычислении произошла ошибка";
//   }

//   let volume = edgeLength * edgeLength * edgeLength;

//   let surfaceArea = 6 * (edgeLength * edgeLength);

//   return `Объем куба: ${volume}, площадь всей поверхности: ${surfaceArea}`;
// }
// console.log(calculateVolumeAndArea(5));
// console.log(calculateVolumeAndArea(15));
// console.log(calculateVolumeAndArea(15.5));
// console.log(calculateVolumeAndArea(-15));
// console.log(calculateVolumeAndArea("15"));

// function getCoupeNumber(seatNumber) {
//   if (
//     typeof seatNumber !== "number" ||
//     seatNumber < 0 ||
//     !Number.isInteger(seatNumber)
//   ) {
//     return "Ошибка. Проверьте правильность введенного номера места";
//   }
//   if (seatNumber === 0 || seatNumber > 36) {
//     return "Таких мест в вагоне не существует";
//   }
//   return Math.ceil(seatNumber / 4);
// }

// числа фибоначи
//-------
// function fib(n) {
//   if (typeof n !== "number" || n <= 0 || !Number.isInteger(n)) {
//     return "";
//   }

//   let fibSequence = [0, 1];

//   for (let i = 2; i < n; i++) {
//     fibSequence[i] = fibSequence[i - 1] + fibSequence[i - 2];
//   }

//   return fibSequence.slice(0, n).join(" ");
// }

// function fib(num) {
//   if (typeof num !== "number" || num <= 0 || !Number.isInteger(num)) {
//     return "";
//   }

//   let result = "";
//   let first = 0;
//   let second = 1;

//   for (let i = 0; i < num; i++) {
//     if (i + 1 === num) {
//       result += `${first}`;
//       // Без пробела в конце
//     } else {
//       result += `${first} `;
//     }

//     let third = first + second;
//     first = second;
//     second = third;
//   }

//   return result;
// }
// const options = {
//   name: "test",
//   width: 1024,
//   height: 1024,
//   colors: {
//     border: "black",
//     bg: "red",
//   },
//   makeTest: function () {
//     console.log("Test");
//   },
// };

// options.makeTest();

// for (let key in options) {
//   console.log(`Свойство ${key} имеет значение ${options[key]}`);
// }

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arr.pop();
// arr.push(11);
// console.log(arr);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

for (let value of arr) {
  console.log(value);
}
