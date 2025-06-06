<template>
    <div>
        <h1>Contador</h1>
        <div>{{ numero }}</div>
        <button @click="aumentar">Aumentar</button>
        <button @click="diminuir">Diminnuir</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const numero = ref(0)

const aumentar = () => {
    numero.value++
}

const diminuir = () => {
    numero.value--
}
</script>