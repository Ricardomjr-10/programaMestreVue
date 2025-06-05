<template>
    <div class="todo-list">
        <h1>Simples lista de tarefas</h1>
        <label for="tarefa"></label>
        <input type="text" @keyup.enter="adicionarTarefa" v-model="minhaTarefa" placeholder="digite sua tarefa">
        <button @click="adicionarTarefa">Adicionar Tarefa</button>
        <ul>
            <li v-for="(tarefa, index ) in tarefas" :key="index">
                <input type="checkbox" v-model="tarefa.concluida"><span :class="{'tarefa-concluida': tarefa.concluida}">{{ tarefa.texto }}</span>
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
        tarefas.value.push({texto: minhaTarefa.value, concluida: false})
        minhaTarefa.value = ''
        }
    }

    const removerTarefa = (index) => {
        tarefas.value.splice(index, 1)
    }
</script>

<style scoped>
    .todo-list {
        font-family: Arial, Helvetica, sans-serif;
        max-width: 500px;
        margin: 50px auto;
        padding: 20px;
        border: 1px solid #eee;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 1);
    }

    h1 {
        text-align: center;
        color: #333;
    }

    input[type="text"] {
        width: calc(100% - 160px);
        padding: 10px;
        margin-right: 10px;
        border: 1px solid #ddd;
        border-radius: 4px;
    }

    button {
        padding: 10px 15px;
        background-color: #4caf50;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    button:hover {
        background-color: #45a049;
    }

    ul {
        list-style-type: none;
        padding: 0;
        margin-top: 20px;
    }

    li {
        display: flex;
        /* justify-content:space-between; */
        align-items:center;
        padding: 10px;
        border-bottom: 1px solid #eee;
        background-color: #f9f9f9;
        margin-bottom: 5px;
        border-radius: 4px;
    }

    li:last-child {
        border-bottom: none;
    }

    li button {
        background-color: #f44336;
        padding: 5px 10px;
        font-size: 0.8em;
         margin-left: auto; /* Empurra o botão para a direita */
    }

    li button:hover {
        background-color: #da190b;
    }

    .tarefa-concluida {
  text-decoration: line-through;
  color: #888; /* Opcional: deixar a cor do texto mais suave */
}

li input[type="checkbox"] {
  margin-right: 10px;
  transform: scale(1.2); /* Aumenta um pouco o checkbox */
}

span {
    flex-grow: 1;
}

</style>