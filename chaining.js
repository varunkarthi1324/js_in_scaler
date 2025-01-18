let arr = [
  { name: "A", age: 14, gender: "M" },
  { name: "B", age: 24, gender: "F" },
  { name: "C", age: 18, gender: "M" },
  { name: "D", age: 30, gender: "F" },
  { name: "E", age: 28, gender: "M" },
  { name: "F", age: 47, gender: "F" },
];

let males = arr
  .filter((n) => {
    return n.gender == "M";
  })
  .map((obj) => {
    return obj.age;
  });

console.log(males);

const transactions = [1000, 2000, -350, 4000, 6000, -7000, 3800];

let sumOfPositives = transactions
  .filter((n) => {
    return n > 0;
  })
  .reduce((acc, value) => {
    return acc + value;
  }, 0);

console.log(sumOfPositives);
