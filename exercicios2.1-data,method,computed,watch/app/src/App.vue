<template>
  <div>
    <!-- <InstanciaVue/>
    <TesteComputed/>
    <TesteInput/>
    <TesteWatch/>
    <ClasseJavasxript/> -->
    <!-- <DiretivasIf/> -->
     <MeuBotao/>
     <h1>exemplo simples de props</h1>
     <TesteProps :mensagem="minhaMensagem"/>

     <TesteProps mensagem="Ola do segundo componente"/>

     <p>A mensagem acima veio do componete pai atraves do Props</p>
  </div>
</template>

<script>
import MeuBotao from './components/MeuBotao.vue';
import TesteProps from './components/TesteProps.vue';

// import InstanciaVue from './components/InstanciaVue.vue';
// import TesteComputed from './components/TesteComputed.vue';
// import TesteInput from './components/TesteInput.vue';
// import TesteWatch from './components/TesteWatch.vue';
// import ClasseJavasxript from './components/ClasseJavasxript.vue'
// import DiretivasIf from './components/DiretivasIf.vue';




export default {
  name: 'App',
  components: {
    // InstanciaVue,
    // TesteComputed,
    // TesteInput,
    // TesteWatch,
    // ClasseJavasxript,
    // DiretivasIf,
    TesteProps,
    MeuBotao
  },
  data() {
    return{
      minhaMensagem:'Ola componente pai'
    }

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
