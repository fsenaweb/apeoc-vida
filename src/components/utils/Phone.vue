<template>
    <div class="mt-4" :class="color">
        <p class="h4 display-5 text-center p-0 m-0">Horário de Atendimento</p>
        <p class="h6 display-5 text-center p-0 m-0">De Segunda à Sexta das 8:00 às 18:00hs</p>
        <p class="h3 display-5 text-center font-weight-bolder p-0 m-1">0800 726 0638</p>
    </div>
</template>

<script>
    export default {
        name: 'Phone',
        props: {
            color: {
                type: String,
                required: false,
                default: 'text-black'
            }
        }
    }
</script>

<style scoped>

</style>