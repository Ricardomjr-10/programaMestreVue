<template>
    <div>
        <h1>V-if, v-for e v-on</h1>
        <input type="text" v-model="nome" placeholder="Digite seu nome">
        <p v-bind:style="paragrafo" v-on:click="mudarCor">{{ nome }}</p>
        <button @click="aumentarFonte">Aumentar Fonte</button>

        <div v-if="condition">
            Este conteudo sera redenrizado apenas se 'condition' for verdadeiro.
        </div>
        <div v-if="type === 'A'">
            componente A
        </div>
        <div v-else-if="type === 'B'">
            componente B
        </div>
        <div v-else>
            componente padrão (nem A nem B)
        </div>
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
            },
            condition:true,
            type:'A'
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