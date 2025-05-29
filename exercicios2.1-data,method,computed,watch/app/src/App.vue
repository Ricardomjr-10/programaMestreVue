<template>
  <div>
    <InstanciaVue/>
    <TesteComputed/>
  </div>
</template>

<script>
import InstanciaVue from './components/InstanciaVue.vue';
import TesteComputed from './components/TesteComputed.vue';



export default {
  name: 'App',
  components: {
    InstanciaVue,
    TesteComputed
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
