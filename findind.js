const trasanctions = [-1000,-2000, -3000, -4000, -5000, 860, -1890, -4500];

// let findWithdrawal= trasanctions.find(function(n){
//     return n<0
// })

// console.log(findWithdrawal)

// let firstoneIndex= trasanctions.findIndex(function(n){
//     return n<0
// })

// console.log(firstoneIndex)



//some returns the boolean value of the functions

let res= trasanctions.some(function(n){
    return n>0
})

console.log(res)

//every

let res1= trasanctions.every(function(n){
    return n<0
})

console.log(res1)