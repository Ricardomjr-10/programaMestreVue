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
        <div>
            <h4>Teste lista numerica</h4>
            <span v-for="n in 5" :key="n"> {{ n }} <br></span>
        </div>
        <div>
            <label for="mensagem">Sua Mensagem:</label><br>
            <textarea id="mensagem" v-model="minhaMensagem"></textarea>
            <p>Você digitou: {{ minhaMensagem }}</p>
        </div>
        <div>
            <h4>check box</h4>
            <input type="checkbox" id="aceitarTermos" v-model="aceitoTermos">
            <label for="aceitarTermos">Eu concordo com os termos e condições.</label>
            <p v-if="aceitoTermos">Obrigado por aceitar!</p>
            <p v-else>Por favor, aceite os termos para continuar.</p>
        </div>
        <div>
            <h4>multiplos checkbox</h4>
            <p>Quais seus esportes favoritos?</p>
            <input type="checkbox" id="futebol" value="Futebol" v-model="esportesSelecionados">
            <label for="futebol">Futebol</label><br>

            <input type="checkbox" id="basquete" value="Basquete" v-model="esportesSelecionados">
            <label for="basquete">Basquete</label><br>

            <input type="checkbox" id="tenis" value="Tênis" v-model="esportesSelecionados">
            <label for="tenis">Tênis</label><br>

            <p>Você selecionou: {{ esportesSelecionados }}</p>
        </div>
        <div>
            <h4>multiplos opttions</h4>
            <label for="frutas">Selecione suas frutas favoritas:</label>
            <select  id="frutas" v-model="frutasSelecionadas" multiple>
                <option value="Maçã">Maçã</option>
                <option value="Laranja">laranja</option>
                <option value="Uva">Uva</option>
                <option value="Tangerina">Tangerina</option>
            </select>
            <p>Voce selecionou: {{ frutasSelecionadas }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            frutasSelecionadas: [],
            esportesSelecionados: [],
            aceitoTermos: false,
            minhaMensagem: 'Escreva aqui',
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
            numeros: [1, 2, 3, 4, 5],
            nomes: {
                1: 'um',
                2: 'dois',
                3: 'tres'
            },
            frutas: ['maça', 'uva', 'laranja', 'goiaba'],
            pessoas: [
                { id: 1, nome: 'joao', idade: 26 },
                { id: 2, nome: 'roberto', idade: 30 },
                { id: 3, nome: 'carla', idade: 18 }
            ],
            lista: ['leite', 'pao', 'ovo'],

            usuario: {
                nome: 'carlos',
                sobrenome: 'rodrigues',
                idade: 40
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