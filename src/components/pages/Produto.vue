<template>
    <div class="container container-home mb-4">
        <div class="content-body container">
            <h1> [ Produto ] </h1>
            <h4 v-html="content" />
        </div>
    </div>
</template>

<script>
    import {api} from "../../service/api";

    export default {
        name: 'Produto',
        data () {
            return {
                content: ''
            }
        },
        created () {
            api.get('produtos').then(response => {
                this.content = response.data[0].content.rendered
            })
        }
    }
</script>

<style scoped>

</style>