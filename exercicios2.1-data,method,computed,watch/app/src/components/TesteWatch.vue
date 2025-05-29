<template>
    <div>
        <h1>Pratica Watch</h1>

        <input v-model="pergunta" @keyup.enter="getRespostaAssincrona" type="text" placeholder="Faça um pergunta sobre Vue ou JavaScript">
        <p>Resporta: {{ resposta }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pergunta: '',
            resposta: 'Voce ainda não fez a pergunta'
        }
    },

    watch: {
        pergunta(novoValor, valorAntigo) {
            console.log(`A pergunta mudou de ${valorAntigo} para ${novoValor}`)
            this.getRespostaAssincrona
        }
    },

    methods: {
        getRespostaAssincrona() {
            this.resposta = 'Pensando...'

            setTimeout(() => {
                if (this.pergunta.includes('Vue')) {
                    this.resposta = 'Sim, o Vue é um otimo framework'
                }else if(this.pergunta.includes('JavaScript')) {
                    this.resposta = 'JavaScript é a base para muitos frameworks como o Vue!'
                }else {
                    this.resposta = 'Desculpe, não entendi sua pergunta'
                }
            }, 1000)
        }
    }
}
</script>