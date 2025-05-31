<template>
    <div>
        <h1>V-if, v-for e v-on</h1>
        <input type="text" v-model="nome" placeholder="Digite seu nome">
        <p v-bind:style="paragrafo" v-on:click="mudarCor">{{ nome }}</p>
        <button @click="aumentarFonte">Aumentar Fonte</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nome:'',
            paragrafo:{
                color:'red',
                fontSize:'5px'
            }
        }
    },

    methods: {
        aumentarFonte() {
          this.paragrafo.fontSize ='50px'
        },
        mudarCor() {
            this.paragrafo.color = 'purple'
        }
    }
}
</script>