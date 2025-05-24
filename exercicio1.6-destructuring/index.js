const numbers = [1,2,3]
const [a,b,c] = numbers

console.log(a,b,c)

//skip

const colors = ['blue','green','yellow']
const [firstColor, ,lastColor] = colors

console.log(firstColor,lastColor)

//rest

const fruits = ['apple','banana','orange','lemon']
const [f1,f2, ...restFruits] = fruits
console.log(f1)
console.log(f2)
console.log(restFruits)

//default values

const array = []
const [val1 = 10, val2 = 20] = array

console.log(val1, val2)

//swapping variables

let x = 5
let y = 10

[x, y] = [y, x]

console.log(x, y)
