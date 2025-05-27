<template>
    <div>
        <h1>Instancias Vue</h1>
        <p>{{ nome }}</p>
        <p>{{ contador }}<button @click="incrementar">Incrementar</button></p>
        <p>{{ estaAtivo }}</p>
        <p>{{ listadeItes }}</p>
    </div>
</template>

<script>
export default {
    data() {
         return {
            nome:'Ricardo',
            contador:0,
            estaAtivo: false,
            listadeItes: [1, 2, 3]
         }
    },

    methods: {
        incrementar() {
            this.contador++
        }
    }
}
</script>