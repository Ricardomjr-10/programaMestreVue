<template>
    <div>
        <h1>Pratica Computed</h1>
        <p>primeiro Nome: {{ primeiroNome }}</p>
        <p>Segundo Nome: {{ segundoNome }}</p>
        <p>Nome completo: {{ nomeCompleto }}</p>
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
    }
}
</script>