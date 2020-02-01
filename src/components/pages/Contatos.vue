<template>
    <div class="container container-home mb-4">
        <div class="content-body container">
            <h1> [ Contatos ] </h1>
            <div v-if="!content">
                <h4>Nenhuma informação encontrada.</h4>
            </div>
            <div v-else>
                <h4 v-html="content"/>
            </div>
        </div>
    </div>
</template>

<script>
    import {api} from "../../service/api";

    export default {
        name: 'Contatos',
        data () {
            return {
                content: ''
            }
        },
        created () {
            api.get('contatos').then(response => {
                this.content = response.data[0].content.rendered
            })
        }
    }
</script>

<style scoped>

</style>