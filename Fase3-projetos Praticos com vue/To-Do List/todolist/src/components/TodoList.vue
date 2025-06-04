<template>
    <div>
        <h1>Simples lista de tarefas</h1>
        <label for="tarefa"></label>
        <input type="text" v-model="minhaTarefa" placeholder="digite sua tarefa">
        <button @click="adicionarTarefa">Adicionar Tarefa</button>
        <p>{{ tarefas }}</p>
        <ul>
            <li v-for="tarefa in tarefas" :key="tarefa">{{ tarefa }}</li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue';

    const minhaTarefa = ref('')
    const tarefas = ref([])

    const adicionarTarefa = () => {
        tarefas.value.push(minhaTarefa)
    }
</script>