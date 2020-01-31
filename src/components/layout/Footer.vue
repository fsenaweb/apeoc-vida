<template>
    <div class="footer mt-3">
        <div class="container mt-5">
            <div class="row">
                <div class="col-6">
                    <div class="logo">
                        <img src="./../../assets/images/logo.jpg" alt=""/>
                    </div>
                    <Phone color="text-white"/>
                </div>
                <div class="col-5">
                    <div class="text-center mb-3">
                        <img src="./../../assets/images/logo-apeoc.png" alt=""/>
                    </div>
                    <div class="h6 text-white font-weight-bolder text-center">
                        Sindicato dos Servidores Públicos lotados nas Secretarias de Educação e de Cultura do Estado do Ceará e nas Secretarias ou Departamentos de Educação e/ou Cultura dos Municípios do Ceará – APEOC
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright">
            <div class="container">
                <div class="row p-2">
                    <div class="col-8 h5">
                        &copy; APEOC-VIDA {{ new Date().getFullYear() }} | Todos os direitos reservados
                    </div>
                    <div class="col-3 text-right ">
                        <span class="fsenaweb ml-n5">
                        <a href="https://fsenaweb.me" target="_blank" rel="noopener noreferrer"
                           title="Especializado em desenvolver soluções web para o sucesso dos seus negócios">
                        fsenaweb</a>
                    </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Phone from "../utils/Phone";

    export default {
        name: 'Footer',
        components: {
            Phone
        }
    }
</script>

<style scoped>

</style>