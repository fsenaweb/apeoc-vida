<template>
    <div class="modal fade" :class="openModal.styleClass" id="ModalLongoExemplo" tabindex="-1" role="dialog" aria-labelledby="TituloModalLongoExemplo" aria-hidden="true" :style="openModal.style">
        <div class="modal-dialog modal-sm" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="container">
                        <p class="text-black small">Extração da Loteria Federal em
                            {{ data.data_sorteio }}</p>
                        <p class="card-text">1º Prêmio: {{ data.premio1 }}</p>
                        <p class="card-text">2º Prêmio: {{ data.premio2 }}</p>
                        <p class="card-text">3º Prêmio: {{ data.premio3 }}</p>
                        <p class="card-text">4º Prêmio: {{ data.premio4 }}</p>
                        <p class="card-text">5º Prêmio: {{ data.premio5 }}</p>
                        <h5 class="mt-1 text-center text-black font-weight-bold">{{ data.resultado }}</h5>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" @click.prevent="fecharModal" class="btn btn-primary" data-dismiss="modal">Fechar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ModalSorteio',
        props: ['openModal', 'data'],
        methods: {
            fecharModal() {
                let styles = {
                    style: 'display: none;',
                    styleClass: ''
                }
                this.$emit('fecharModal', styles)
            }
        }
    }
</script>

<style scoped>

</style>