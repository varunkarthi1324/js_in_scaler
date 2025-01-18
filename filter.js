let numbers = [1, 2, 20, 35, 12, 17, 46, 60];

// let evenArray = [];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 == 0) {
//     evenArray.push(numbers[i]);
//   }
// }

// console.log(evenArray);

let evenNu = numbers.filter((n) => {
  return n % 2 == 0;
});

console.log(evenNu);

const transactions = [1000, 2000, -350, 4000, 6000, -7000, 3800];

let positive = transactions.filter((n) => {
  return n > 0;
});

console.log(positive);
