<template>
    <div class="container-topo bg-white pt-3 pb-3 mb-5">
        <div class="container">
            <div class="row">
            <div class="col-4 mt-1">
                <router-link to="/">
                    <img src="./../../assets/images/logo.jpg" class="img-fluid" alt="Logo APEOC-VIDA">
                </router-link>
            </div>
            <div class="col-8">
                <ul class="nav float-right mt-3">
                    <li class="nav-item link-menu">
                        <router-link to="/" class="nav-link active" href="#">HOME</router-link>
                    </li>
                    <li class="nav-item link-menu">
                        <router-link to="/produto" class="nav-link" href="#">PRODUTO</router-link>
                    </li>
                    <li class="nav-item link-menu dropdown" :class="{ show: isActive }">
                        <a @click="openDropdown" class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">COBERTURAS</a>
                        <div class="dropdown-menu" :class="{ show: isActive }">
                            <router-link to="/" tag="a" class="dropdown-item text-uppercase font-weight-bold" href="#">Morte Qualquer causa</router-link>
                            <router-link to="/" tag="a" class="dropdown-item text-uppercase font-weight-bold" href="#">Invalidez por Acidente</router-link>
                            <router-link to="/" tag="a" class="dropdown-item text-uppercase font-weight-bold" href="#">Diagnóstico de Câncer</router-link>
                            <router-link to="/" tag="a" class="dropdown-item text-uppercase font-weight-bold" href="#">Assistência Funeral Familiar</router-link>
                            <router-link to="/" tag="a" class="dropdown-item text-uppercase font-weight-bold" href="#">Sorteio Semanal</router-link>
                        </div>
                    </li>
                    <li class="nav-item link-menu">
                        <a class="nav-link" href="#">SEGURADORA</a>
                    </li>
                    <li class="nav-item link-menu">
                        <a class="nav-link" href="#">SORTEIOS</a>
                    </li>
                    <li class="nav-item link-menu">
                        <a class="nav-link" href="#">CONTATOS</a>
                    </li>
                </ul>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Header',
        data () {
            return {
                isActive: false
            }
        },
        methods: {
            openDropdown () {
                this.isActive = !this.isActive;
            }
        }
    }
</script>

<style scoped>

</style>