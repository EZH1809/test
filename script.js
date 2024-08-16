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

function fifthTask() {
  const arrayOfNumbers = [];

  for (let i = 5; i <= 10; i++) {
    arrayOfNumbers[i - 5] = i;
  }

  console.log(fifthTask());
  return arrayOfNumbers;
}
fifthTask();
/*
  function fifthTask() {
    const arrayOfNumbers = [];

    for (let i = 5; i <= 10; i++) {
        arrayOfNumbers[i - 5] = i;
    }

    // Не трогаем
    return arrayOfNumbers;
}

console.log(fifthTask()); // [5, 6, 7, 8, 9, 10]

  */
