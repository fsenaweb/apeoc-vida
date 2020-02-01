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
                        <a @click.prevent="openDropdown" class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">COBERTURAS</a>
                        <div class="dropdown-menu" :class="{ show: isActive }">
                            <router-link @click="openDropdown()" to="/coberturas/morte-qualquer-causa" tag="a" class="dropdown-item text-uppercase font-weight-bold" href="#">
                                <span @click="openDropdown">Morte Qualquer causa</span>
                            </router-link>
                            <router-link to="/coberturas/invalidez" tag="a" class="dropdown-item text-uppercase font-weight-bold" href="#">
                                <span @click="openDropdown">Invalidez por Acidente</span>
                            </router-link>
                            <router-link to="/coberturas/cancer" tag="a" class="dropdown-item text-uppercase font-weight-bold" href="#">
                                <span @click="openDropdown">Diagnóstico de Câncer</span>
                            </router-link>
                            <router-link to="/coberturas/funeral" tag="a" class="dropdown-item text-uppercase font-weight-bold" href="#">
                                <span @click="openDropdown">Assistência Funeral Familiar</span>
                            </router-link>
                            <router-link to="/coberturas/sorteio" tag="a" class="dropdown-item text-uppercase font-weight-bold" href="#">
                                <span @click="openDropdown">Sorteio Semanal</span>
                            </router-link>
                        </div>
                    </li>
                    <li class="nav-item link-menu">
                        <router-link to="/seguradora" tag="a" class="nav-link" href="#">SEGURADORA</router-link>
                    </li>
                    <li class="nav-item link-menu">
                        <router-link to="/sorteios" tag="a" class="nav-link" href="#">SORTEIOS</router-link>
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