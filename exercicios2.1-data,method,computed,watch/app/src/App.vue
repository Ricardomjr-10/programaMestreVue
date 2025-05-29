<template>
  <div>
    <InstanciaVue/>
    <TesteComputed/>
    <TesteInput/>
    <TesteWatch/>
  </div>
</template>

<script>
import InstanciaVue from './components/InstanciaVue.vue';
import TesteComputed from './components/TesteComputed.vue';
import TesteInput from './components/TesteInput.vue';
import TesteWatch from './components/TesteWatch.vue';




export default {
  name: 'App',
  components: {
    InstanciaVue,
    TesteComputed,
    TesteInput,
    TesteWatch
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
