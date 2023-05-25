// function totalSumInputNums() {
//   let input = Number(prompt("Введіть число"));
//   const numbers = [];
//   let total = 0;
//   do {
//     if (input === null) {
//       break;
//     };
//     if (Number.isNaN(input)) {
//       alert("Було введено не число, спробуйте ще раз");
//     } else {
//       numbers.push(input);
//     };
//     if (numbers.length > 0) {
//       for (const number of numbers) {
//         total += number;
//       };
//     };
//   } while (input !== null);
//   return total;
// }
// totalSumInputNums();
// console.log(numbers);

// function totalSumInputNums () {
//   let input = Number(prompt('Введіть число'));
//   const numbers = [];
// }

// 23.05.22

// const addNums = function () {
//   const numbers = [];
//   let total = 0;
//   let input = Number(prompt("Введіть число"));
//   // while (!isNaN(input)) {
//   //   if (input === null) {
//   //     break;
//   //   } else {
//   //     numbers.push(input);
//   //   }
//   // }
//   do {
//     if (input === null) {
//       return;
//     } else {
//       numbers.push(input);
//     }
//   } while (input < 100 && !isNaN(input));

//   for (let i = 0; i < numbers.length; i++) {
//     total += numbers[i];
//     console.log(total);
//   }
//   console.log(numbers);
//   return total;
// };

// addNums();

// працююча версія

// const numbers = [];
// let total = 0;
// let input = Number(prompt("Введіть число"));

// while (input) {
//   if (!isNaN(input)) {
//     numbers.push(input);
//     input = Number(prompt("Введіть число"));
//   } else if (isNaN(input)) {
//     break;
//   } else if (input === null) {
//     break;
//   };
// };
// console.log(numbers);

// const addNums = function () {
//   for (let i = 0; i < numbers.length; i++) {
//     total += numbers[i];
//   };
//   console.log(total);
//   return total;
// };
// addNums();

// const addNums = function () {
//   const numbers = [];
//   let total = 0;
//   let input = Number(prompt("Введіть число"));

//   while (input) {
//     if (!isNaN(input)) {
//       numbers.push(input);
//       input = Number(prompt("Введіть число"));
//     } else if (isNaN(input)) {
//       break;
//     } else if (input === null) {
//       break;
//     };
//   };

//   for (let i = 0; i < numbers.length; i++) {
//     total += numbers[i];
//   };
//   console.log(numbers);
//   console.log(total);
//   return total;
// };
// addNums();