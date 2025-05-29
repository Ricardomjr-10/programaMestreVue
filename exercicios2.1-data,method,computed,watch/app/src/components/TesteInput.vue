<template>
    <div>
        <h1>Pratica Vue de diretivas</h1>
        <input v-model="primeiroNome" type="text" placeholder="Digite o seu primeiro nome">
        <input v-model="segundoNome" type="text" placeholder="Digite o seu segundo nome">
        <button @click="nomeCompletos">Nome completo</button>
        <p>Nome completo: {{ nomeCompleto }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            primeiroNome: '',
            segundoNome: ''
        }
    },

    computed: {
        nomeCompleto() {
            return `${this.primeiroNome} ${this.segundoNome}`
        }
    },

    methods: {
        nomeCompletos() {
            this.segundoNome = 'Muller'
        }
    }
}
</script>