<template>
    <div>
        <h1>Contador</h1>
        <div>{{ props.valorContador }}</div>
    </div>
</template>

<script setup>
import defineProps from 'vue'

const props = defineProps({
    valorContador: {
        type: Number,
        required: true,
        default: 0
    }
})



</script>