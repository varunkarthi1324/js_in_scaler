// const num = [1, 2, 3, 4, 5];

// const squaredNum = num.map(function (n) {
//   return n * n;
// });

// console.log(squaredNum);

const trasanctions = [1000, 2000, 3000, 4000, 5000, -860, 1890, -4500];

const intodoll = 80;

const change = trasanctions.map(function (n) {
  return (n / intodoll).toFixed(0);
});

console.log(change);
