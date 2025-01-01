// function printFirstName(firstname,cb) {
//     console.log(firstname)
//     cb('m')
// }

// function printLastName(lastnname) {
//     console.log(lastnname)
// }

// printFirstName('varun',printLastName)

const isEven = (n) => {
  return n % 2 == 0;
};

let printResult = (evenFn, num) => {
  const isNumEven = evenFn(num);
  console.log(`the number is ${num} is even number: ${isNumEven}`);
};

printResult(isEven, 9);
