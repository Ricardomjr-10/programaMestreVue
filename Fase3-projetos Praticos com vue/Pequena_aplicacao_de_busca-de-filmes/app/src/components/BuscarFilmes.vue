<template>
    <div>
        <h1>Pesquise um Filme</h1>
        <input type="text" v-model="titleFilme" placeholder="Digite o nome do filme">
        <button @click="pesquisarFilme">Buscar</button>
        <div>
            <div>Nome do Filme: {{ user.Title }}</div>
            <img src={{ user.Poster }} alt="poster">
        </div>
    </div>
</template>


<script setup>
import { ref} from 'vue'

const user = ref('')
const titleFilme = ref('')
const apiKey = ref('49e27f1e')


const pesquisarFilme = async () => {
    const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey.value}&t=${titleFilme.value}`)
    
    const data = await response.json()
    
    user.value = data

    console.log(user.value)
}





</script>