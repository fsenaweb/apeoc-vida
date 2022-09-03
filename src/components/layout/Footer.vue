<template>
    <div class="footer mt-3">
        <div class="container mt-5">
            <div class="row">
                <div class="col-12 col-sm-6 mb-5 mb-sm-0">
                    <div class="logo">
                        <img src="./../../assets/images/logo.jpg" alt=""/>
                    </div>
                    <Phone color="text-white"/>
                </div>
                <div class="col-12 col-sm-5 mb-5 mb-sm-0">
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
                    <div class="col-12 col-sm-8 h5 text-center text-md-left">
                        &copy; APEOC-VIDA {{ new Date().getFullYear() }} | Todos os direitos reservados
                    </div>
                    <div class="col-12 col-sm-3 text-center text-md-right">
                        <span class="fsenaweb ml-1 ml-sm-n5">
                        <a href="https://fsenaweb.dev" target="_blank" rel="noopener noreferrer"
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
