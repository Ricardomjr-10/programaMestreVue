<template>
    <div>
        <h1>Instancias Vue</h1>
        <p>{{ nome }}</p>
        <p>{{ contador }}</p>
        <p>{{ mensagem }}</p>
        <button @click="incrementar">Incrementar</button>
        <button @click="decrementar">Decrementar</button>
        <button @click="somar(10)">Somar 10</button>
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
            listadeItes: [1, 2, 3],
            mensagem:''
         }
    },

    methods: {
        incrementar() {
            this.contador++
            this.atualizarMensagem()
        },

        decrementar() {
            this.contador--
            this.atualizarMensagem()
        },

        atualizarMensagem() {
            if (this.contador > 0) {
                this.mensagem = `O contador está em ${this.contador}`
            } else {
                this.mensagem = `O contador está zerado ou negativo`
            }
        },

        somar(valor) {
            this.contador += valor
        }
    }
}
</script>