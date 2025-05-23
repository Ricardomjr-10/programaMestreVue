let letter = 'a'
letter = 'b'
letter = 'c'

function letters() {
    let letra = 'g'
    console.log(letter, letra)
}


function contar() {
    let count = 0

    function incrementar () {
        count++
        console.log(count)
    }

    return incrementar
}
const meuContador = contar()

meuContador()
meuContador()
meuContador()


letters()
console.log(letter)

const titulo = document.querySelector('h1')

titulo.textContent = 'Novo titulo'
document.writeln(titulo.textContent)

console.log(titulo)