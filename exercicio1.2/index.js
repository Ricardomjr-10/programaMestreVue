const numbers = [1,2,3,4,5]

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

const fMedia = (array) => {
 const med = array.reduce((acc,count) => {
    return acc += count
 }, 0)
 return med/array.length
}

console.log(fMedia(numbers))