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

let input = Number(prompt("Введіть число"));
const numbers = [];
let total = 0;

while (input) {
  if (!isNaN(input)) {
    numbers.push(input);
  } else if (isNaN(input)) {
    break;
  } else if (input === null) {
    break;
  }
}

const addNums = function () {
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
    console.log(total);
  };
  return total;
};

addNums();