<template>
  <div>
    <h1>Meu Contador Vue</h1>
    <ExibirContagem :valorContador="numero"/>
    <BotoesAcao
    @incrementar="incrementar"
    @decrementar="decrementar"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import BotoesAcao from './components/BotoesAcao.vue';
import ExibirContagem from './components/ExibirContagem.vue';

const numero = ref(0)

const incrementar = () => {
 numero.value++
}

const decrementar = () => {
  numero.value--
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
