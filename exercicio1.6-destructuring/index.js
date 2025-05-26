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

let x = 5;
let y = 10;

[x, y] = [y, x];
console.log(x, y);

// destructuring object 

const pessoas = {
    nome:'Ricardo',
    idade: 40
}

const {nome, idade} = pessoas

console.log(nome, idade)

//renaming properties

const {nome:name, idade:age} = pessoas
console.log(name, age)

//defaults values

const books = {title: 'livro1'}

const {title, author = 'desconhecido'} = books
console.log(title, author)

// rest property

const product = {
    id:1,
    type:'pc',
    price: 1000,
    category: 'Eletronics'
}

const {id, type, ...restProducts} = product
console.log(id)
console.log(type)
console.log(restProducts)

//nested object and arrays

const profile = {
    firstname: 'Jean',
    lastName: 'charles',
    adress: {
        street: '5 com a principal',
        zip: '45900000'
    },
    hobbies: ['assistir', 'jogar']
}

const {
    firstname,
    adress: {street, zip}, // destruct object
    hobbies: [hob1, hob2]
} = profile

console.log(firstname)
console.log(street, zip)
console.log(hob1, hob2)

//commom use with function

function displayUser({name, age, city = 'desconhecido'}) {
    console.log(`${name} tem ${age} anos e mora em ${city}`)
}

const user1 = {name: 'Ricardo', age: 40, city:'Cristopolis'}
const user2 = {name: 'James', age: 35}

displayUser(user1)
displayUser(user2)

//function destructu

function coordenadas () {
    return [56, 44]
}

const [e, d] = coordenadas()

console.log(e, d)

function person() {
    return { ids:1, names: 'Roberto',}
}

const {ids, names} = person()
console.log(ids, names)