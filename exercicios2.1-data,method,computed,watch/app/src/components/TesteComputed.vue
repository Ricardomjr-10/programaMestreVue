<template>
    <div>
        <h1>Pratica Computed</h1>
        <p>primeiro Nome: {{ primeiroNome }}</p>
        <p>Segundo Nome: {{ segundoNome }}</p>
        <p>Nome completo: {{ nomeCompleto }}</p>

        <button @click="mudarNome">Mudar Nome</button>
    </div>
</template>


<script>
export default {
    data() {
        return {
            primeiroNome: 'Ricardo',
            segundoNome: 'Muller'
        }
    },

    computed: {
        nomeCompleto() {
            console.log('Calculando nome completo...')
            return `${this.primeiroNome} ${this.segundoNome}`
        }
    },

    methods: {
        mudarNome() {
            this.segundoNome = 'Rocha'
        }
    }
}
</script>