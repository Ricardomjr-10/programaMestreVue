<template>
    <div>
        <h1>Teste Props</h1>
        <h2>{{ mensagem }}</h2>
        <p>Este é um componente simples</p>
    </div>
</template>

<script>
export default {
  props:['mensagem']
}
</script>

<style>
h2 {
    color: #2c3e50;
}
</style>