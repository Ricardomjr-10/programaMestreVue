<template>
    <div>
        <h1>Pesquise um Filme</h1>
        <input type="text" v-model="titleFilme" placeholder="Digite o nome do filme">
        <button @click="pesquisarFilme">Buscar</button>
        <div>
            <div>Nome do Filme: {{ user.Title }}</div>
            <img :src="user.Poster" alt="poster" class="movie-poster-details ">
        </div>
    </div>
</template>


<script setup>
import { ref} from 'vue'

const user = ref('')
const titleFilme = ref('')
const apiKey = ref('49e27f1e')


const pesquisarFilme = async () => {
    const encodedTitle = encodeURIComponent(titleFilme.value.trim())
    const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey.value}&t=${encodedTitle}`)
    
    const data = await response.json()
    
    user.value = data

    console.log(user.value)
}


</script>

<style scoped>
/* ... seus estilos existentes ... */
.movie-poster-details {
  max-width: 30%;
  height: auto;
  margin-top: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
</style>