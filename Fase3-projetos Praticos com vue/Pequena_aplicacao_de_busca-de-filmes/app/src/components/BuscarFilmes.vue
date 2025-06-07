<template>
    <div>
        <h1>Pesquise um Filme</h1>
        <input type="text" v-model="titleFilme" placeholder="Digite o nome do filme">
        <button @click="pesquisarFilme">Buscar</button>
        <div>
            <div>Nome do Filme</div>
            <img src="" alt="poster">
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';


const titleFilme = ref('')
const apiKey = ref('49e27f1e')

const url = fetch(`http://www.omdbapi.com/?t=${titleFilme.value}&apikey=${apiKey.value}`)

const pesquisarFilme = () => {

    console.log(url)
}
</script>