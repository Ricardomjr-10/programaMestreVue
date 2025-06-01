<template>
    <div>
        <h1>V-if, v-for e v-on</h1>
        <input type="text" v-model="nome" placeholder="Digite seu nome">
        <p v-bind:style="paragrafo" v-on:click="mudarCor">{{ nome }}</p>
        <button @click="aumentarFonte">Aumentar Fonte</button>

        <div v-if="condition">
            Este conteudo sera redenrizado apenas se 'condition' for verdadeiro.
        </div>
        <div v-if="type === 'A'">
            componente A
        </div>
        <div v-else-if="type === 'B'">
            componente B
        </div>
        <div v-else>
            componente padrão (nem A nem B)
        </div>

        <div>
            <h1 v-if="isLoggedIn">Bem-vindo, usuário!</h1>
            <p v-if="isAdmin">Você tem acesso total.</p>
            <button v-if="showButton">Clique aqui</button>
        </div>
            <p v-for="numero in numeros" :key="numero">{{ numero }}</p>
            <p v-for="nome in nomes" :key="nome">{{ nome }}</p>
            <div>
                <ul>
                    <li v-for="(fruta, index) in frutas" :key="index">{{ fruta }}</li>
                </ul>
                <ul>
                    <li v-for="pessoa in pessoas" :key="pessoa.id">
                        {{ pessoa.nome }} ({{ pessoa.idade }} anos)
                    </li>
                </ul>
                <div>
                    <h4>Lista de compras</h4>
                    <ul>
                        <li v-for="(item, index) in lista" :key="index">
                            {{ index + 1 }}.{{ item }}
                        </li>
                    </ul>
                    <div>
                        <h4>usuario</h4>
                        <ul>
                            <li v-for="(value, key, index,) in usuario" :key="index">
                                {{ index + 1 }}. {{ key }}: {{ value }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nome: '',
            paragrafo: {
                color: 'red',
                fontSize: '5px'
            },
            condition: true,
            type: 'A',
            isLoggedIn: true,
            isAdmin: true,
            showButton: true,
            numeros:[1,2,3,4,5],
            nomes: {
                1:'um',
                2:'dois',
                3:'tres'
            },
            frutas: ['maça', 'uva', 'laranja', 'goiaba'],
            pessoas: [
                {id:1, nome: 'joao', idade: 26},
                {id:2, nome: 'roberto', idade: 30},
                {id:3, nome: 'carla', idade: 18}
            ],
            lista: ['leite', 'pao','ovo'],

            usuario: {
                nome:'carlos',
                sobrenome:'rodrigues',
                idade:40
            }
        }
    },

    methods: {
        aumentarFonte() {
            this.paragrafo.fontSize = '50px'
        },
        mudarCor() {
            this.paragrafo.color = 'purple'
        }
    }
}
</script>