<template>
    <div class="container container-home mb-4">
        <div class="content-body container">
            <h1> [ Sorteios ] </h1>
            <div v-if="loading">
                <h4>Carregando os dados...</h4>
            </div>
            <div v-else>
                <div v-if="!content">
                    <h4>Nenhuma informação encontrada.</h4>
                </div>
                <div v-else>
                    <div class="row">
                        <ModalSorteio :data="resultado" :openModal="openModal" @fecharModal="fecharModal"/>
                        <div class="col-3" v-for="(data, index) in content" :key="index">
                            <div class="card mb-4">
                                <div class="card-body">
                                    <h5 class="card-title text-center">Contemplado em {{ data.acf.data_sorteio}}</h5>
                                    <h3 class="card-text text-center">{{ data.acf.resultado }}</h3>
                                    <div class="text-center">
                                        <a href="#" @click.prevent="conferiNumero(data.acf)">Conferir números</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {api} from "../../service/api";
    import ModalSorteio from "../layout/ModalSorteio";

    export default {
        name: 'Seguradora',
        components: {
            ModalSorteio
        },
        data() {
            return {
                resultado: {},
                openModal: {
                    style: 'display: none;',
                    styleClass: ''
                },
                loading: false,
                content: ''
            }
        },
        beforeCreate() {
            this.loading = true
        },
        created() {
            api.get('sorteios').then(response => {
                this.content = response.data
                this.loading = false
            })
        },
        methods: {
            conferiNumero(value) {
                this.resultado = value
                this.openModal = {
                    style: 'display: block; padding-right: 15px;',
                    styleClass: 'show'
                }
            },
            fecharModal(value) {
                this.openModal = {
                    style: value.style,
                    styleClass: value.styleClass
                }
            }
        }
    }
</script>

<style scoped>

</style>