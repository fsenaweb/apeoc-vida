<template>
    <div class="container container-home mb-4">
        <div class="content-body container">
            <div v-if="!content">
                <h1> [ Informativo ] </h1>
                <h4>Nenhuma informação encontrada.</h4>
            </div>
            <div v-else>
                <h1> [ Informativo ] <br /><small><div class="pt-n5 font-weight-bold">{{ content.title.rendered }}</div></small></h1>
                <h4 v-html="content.content.rendered"/>
            </div>
        </div>
    </div>
</template>

<script>
    import {api} from "../../../service/api";

    export default {
        name: 'visualizarNoticia',
        data () {
            return {
                loading: false,
                content: ''
            }
        },
        mounted() {
            this.getDados()
        },
        methods: {
            async getDados () {
                this.loading = true
                await api.get(`posts?slug=${this.$route.params.slug}`)
                    .then(response => {
                        this.content = response.data[0]
                        this.loading = false
                    })
            }
        }
    }
</script>

<style scoped>

</style>