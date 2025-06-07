<template>
    <div>
        <button @click="aumentar">Aumentar</button>
        <button @click="diminuir">Diminuir</button>
    </div>
</template>

<script setup>

import { defineEmits } from 'vue'

const emit = defineEmits(['incrementar', 'decrementar'])

const aumentar = () => {
    emit('incrementar')
}

const diminuir = () => {
    emit('decrementar')
}
</script>