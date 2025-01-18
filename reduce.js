let num = [1, 2, 3, 4, 10,20,50,13,24];

// let sum = 0;

// for (let i = 0; i < num.length; i++) {
//   sum = sum + num[i];
// }

// console.log(sum);



let result=num.reduce((acc,value)=>{
    let updatedSum=acc+value
    return updatedSum
},0)

console.log(result)



let result1=num.reduce((acc,value)=>{
    let updatedSum=acc*value
    return updatedSum
},1)

console.log(result1)
