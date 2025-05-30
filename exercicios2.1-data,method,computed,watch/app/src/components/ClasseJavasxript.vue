<template>
    <div>
        <h1>Classes em JavaScript</h1>
        <p>{{ pessoa1 }}</p>
        <p>{{ message}}</p>
        <p>{{ estudante1 }}</p>
        <p>{{ message1 }}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue'


let message = ref('')
let message1 = ref('')

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }

    apresentar() {
        message.value = `Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos`
    }
}

class Estudante extends Pessoa {
    constructor(nome, idade, curso) {
        super(nome, idade)
        this.curso = curso
    }

    estudar() {
        message1.value = `${this.nome} esta estudando ${this.curso}`
    }
}

const pessoa1 = new Pessoa('Bradley', 60)
pessoa1.apresentar()

const estudante1 = new Estudante('Breno', 7, 'cientista')
estudante1.estudar()
</script>