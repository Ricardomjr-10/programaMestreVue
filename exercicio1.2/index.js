const numbers = [1,2,3,4,5,6]

let soma = 0

// for (let i = 0; i < numbers.length; i++) {
//     soma += numbers[i]
// }

numbers.forEach(number => {
     soma += number
})

const nimb = numbers.reduce((soma,count,ind, array) => {
return soma += count
}, 0)

const media = soma/numbers.length
console.log(soma, media, nimb)
