<template>
    <div class="container-topo bg-white pt-3 pb-3 mb-5">
        <div class="container">
            <div class="row">
                <div class="col-9 col-md-10 col-lg-3 col-xl-4 mt-1 text-center text-lg-left">
                    <router-link to="/">
                        <img src="./../../assets/images/logo.jpg" class="img-fluid ml-3" alt="Logo APEOC-VIDA">
                    </router-link>
                </div>
                <div class="col-3 col-md-2 col-lg-9 col-xl-8">
                    <nav class="navbar navbar-expand-lg navbar-light">
                        <button class="navbar-toggler mt-2" type="button" data-toggle="collapse"
                                data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02"
                                aria-expanded="false" aria-label="Alterna navegação"
                                @click.prevent="openMenu" >
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="navbar-collapse d-none">
                            <ul class="nav float-right mt-3 mt-lg-0 mt-xl-2">
                                <li class="nav-item link-menu">
                                    <router-link to="/" class="nav-link active" href="#">HOME</router-link>
                                </li>
                                <li class="nav-item link-menu">
                                    <router-link to="/produto" class="nav-link" href="#">PRODUTO</router-link>
                                </li>
                                <li class="nav-item link-menu dropdown" :class="{ show: isActive }">
                                    <a @click.prevent="openDropdown" class="nav-link dropdown-toggle"
                                       data-toggle="dropdown"
                                       href="#" role="button" aria-haspopup="true" aria-expanded="false">COBERTURAS</a>
                                    <div class="dropdown-menu" :class="{ show: isActive }">
                                        <router-link @click="openDropdown()" to="/coberturas/morte-qualquer-causa"
                                                     tag="a"
                                                     class="dropdown-item text-uppercase font-weight-bold" href="#">
                                            <span @click="openDropdown">Morte Qualquer causa</span>
                                        </router-link>
                                        <router-link to="/coberturas/invalidez" tag="a"
                                                     class="dropdown-item text-uppercase font-weight-bold" href="#">
                                            <span @click="openDropdown">Invalidez por Acidente</span>
                                        </router-link>
                                        <router-link to="/coberturas/cancer" tag="a"
                                                     class="dropdown-item text-uppercase font-weight-bold" href="#">
                                            <span @click="openDropdown">Diagnóstico de Câncer</span>
                                        </router-link>
                                        <router-link to="/coberturas/funeral" tag="a"
                                                     class="dropdown-item text-uppercase font-weight-bold" href="#">
                                            <span @click="openDropdown">Assistência Funeral Familiar</span>
                                        </router-link>
                                        <router-link to="/coberturas/sorteio" tag="a"
                                                     class="dropdown-item text-uppercase font-weight-bold" href="#">
                                            <span @click="openDropdown">Sorteio Semanal</span>
                                        </router-link>
                                    </div>
                                </li>
                                <li class="nav-item link-menu">
                                    <router-link to="/seguradora" tag="a" class="nav-link" href="#">SEGURADORA
                                    </router-link>
                                </li>
                                <li class="nav-item link-menu">
                                    <router-link to="/sorteios" tag="a" class="nav-link" href="#">SORTEIOS</router-link>
                                </li>
                                <li class="nav-item link-menu">
                                    <router-link to="/contatos" tag="a" class="nav-link" href="#">CONTATOS</router-link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        <transition name="slider">
        <div v-if="collapse" class="sub-container">
            <ul class="container sub-nav open-menu">
                <li class="nav-item link-menu">
                    <router-link to="/" class="nav-link active" href="#">HOME</router-link>
                </li>
                <li class="nav-item link-menu">
                    <router-link to="/produto" class="nav-link" href="#">PRODUTO</router-link>
                </li>
                <li class="nav-item link-menu dropdown" :class="{ show: isActive }">
                    <a @click.prevent="openDropdown" class="nav-link dropdown-toggle"
                       data-toggle="dropdown"
                       href="#" role="button" aria-haspopup="true" aria-expanded="false">COBERTURAS</a>
                    <div class="dropdown-menu" :class="{ show: isActive }">
                        <router-link @click="openDropdown()" to="/coberturas/morte-qualquer-causa"
                                     tag="a"
                                     class="dropdown-item text-uppercase font-weight-bold" href="#">
                            <span @click="openDropdown">Morte Qualquer causa</span>
                        </router-link>
                        <router-link to="/coberturas/invalidez" tag="a"
                                     class="dropdown-item text-uppercase font-weight-bold" href="#">
                            <span @click="openDropdown">Invalidez por Acidente</span>
                        </router-link>
                        <router-link to="/coberturas/cancer" tag="a"
                                     class="dropdown-item text-uppercase font-weight-bold" href="#">
                            <span @click="openDropdown">Diagnóstico de Câncer</span>
                        </router-link>
                        <router-link to="/coberturas/funeral" tag="a"
                                     class="dropdown-item text-uppercase font-weight-bold" href="#">
                            <span @click="openDropdown">Assistência Funeral Familiar</span>
                        </router-link>
                        <router-link to="/coberturas/sorteio" tag="a"
                                     class="dropdown-item text-uppercase font-weight-bold" href="#">
                            <span @click="openDropdown">Sorteio Semanal</span>
                        </router-link>
                    </div>
                </li>
                <li class="nav-item link-menu">
                    <router-link to="/seguradora" tag="a" class="nav-link" href="#">SEGURADORA
                    </router-link>
                </li>
                <li class="nav-item link-menu">
                    <router-link to="/sorteios" tag="a" class="nav-link" href="#">SORTEIOS</router-link>
                </li>
                <li class="nav-item link-menu">
                    <router-link to="/contatos" tag="a" class="nav-link" href="#">CONTATOS</router-link>
                </li>
            </ul>
        </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'Header',
        data() {
            return {
                isActive: false,
                collapse: false
            }
        },
        methods: {
            openDropdown() {
                this.isActive = !this.isActive;
            },
            openMenu() {
                this.collapse = !this.collapse
            }
        }
    }
</script>

<style scoped>

</style>