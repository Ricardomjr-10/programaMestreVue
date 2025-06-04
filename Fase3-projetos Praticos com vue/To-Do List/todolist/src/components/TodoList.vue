<template>
    <div>
        <h1>Simples lista de tarefas</h1>
        <label for="tarefa"></label>
        <input type="text" v-model="minhaTarefa" placeholder="digite sua tarefa">
        <button @click="adicionarTarefa">Adicionar Tarefa</button>
        <ul>
            <li v-for="(tarefa, index ) in tarefas" :key="index">{{ tarefa }}
                <input type="checkbox">check
                <button @click="removerTarefa">Remover</button>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue';

    const minhaTarefa = ref('')
    const tarefas = ref([])

    const adicionarTarefa = () => {
        if (minhaTarefa.value !== '') {
        tarefas.value.push(minhaTarefa.value)
        minhaTarefa.value = ''
        }
    }

    const removerTarefa = (index) => {
        tarefas.value.splice(index, 1)
    }
</script>