<template>
    <div>
        <div v-if="!content">
            <h1> <small></small> </h1>
            <h4>Nenhuma informação encontrada.</h4>
        </div>
        <div v-else>
            <h1> <small>{{ content.title.rendered }}</small> </h1>
            <h4 v-html="content.content.rendered" />
        </div>
    </div>
</template>

<script>
    import { api} from "../../../service/api";

    export default {
        name: 'Funeral',
        data () {
            return {
                content: ''
            }
        },
        created() {
            this.getDados()
        },
        methods: {
            async getDados () {
                await api.get('coberturas')
                    .then(response => {
                        let result = response.data.filter(item => {
                            return item.acf.tipo.value === 'funeral'
                        })
                        if(!result) {
                            result = []
                        }
                        this.content = result[0]
                    })
            }
        }
    }
</script>

<style scoped>

</style>
