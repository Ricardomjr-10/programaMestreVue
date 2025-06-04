<template>
    <div>
        <h1>Exercicio 2.9</h1>
        <button @click="addMensage">clique aqui</button>
        <p>{{ mensage }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return{
            mensage:''
        }
    },
    methods: {
        addMensage() {
            this.mensage = 'Voce clicou!'
        }
    }
}
</script>

<style>
p {
    cursor: pointer;
}
</style>