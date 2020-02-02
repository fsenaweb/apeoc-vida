<template>
    <div>
        <div class="container container-home mb-5">
            <div class="row mb-2">
                <div class="col-12 col-lg-7 mr-4 ml-1 ml-lg-4">
                    <div class="topicos">
                        <h1> [ Informativo ] </h1>
                    </div>
                    <div class="noticias">
                        <img :src="infoPrincipal.acf.imagem.url" class="img-fluid" alt="">
                        <div class="titulo p-2">
                            <router-link :to="`/informativo/${infoPrincipal.slug}`" tag="a" class="nav-link" href="#">{{ infoPrincipal.title.rendered }}</router-link>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-4">
                    <div class="topicos">
                        <h1> [ Sorteios ] </h1>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title h2 mb-3">Sorteio Semanal</h5>
                            <h6 class="card-subtitle mb-3 text-black small">Extração da Loteria Federal em
                                {{ sorteio.data_sorteio }}</h6>
                            <p class="card-text">1º Prêmio: {{ sorteio.premio1 }}</p>
                            <p class="card-text">2º Prêmio: {{ sorteio.premio2 }}</p>
                            <p class="card-text">3º Prêmio: {{ sorteio.premio3 }}</p>
                            <p class="card-text">4º Prêmio: {{ sorteio.premio4 }}</p>
                            <p class="card-text">5º Prêmio: {{ sorteio.premio5 }}</p>
                            <h6 class="card-subtitle mt-4 text-center text-black small">Contemplado em {{ sorteio.data_sorteio }}:</h6>
                            <h5 class="card-subtitle mt-1 display-5 text-center text-black font-weight-bold">{{ sorteio.resultado }}</h5>
                            <router-link to="/sorteios" tag="button" class="btn btn-danger btn-block mt-2">Sorteiros Anteriores</router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-12 col-lg-7 mb-md-5 mr-4 ml-2 ml-md-2 ml-lg-4">
                    <div class="row mt-3 pl-1">
                        <div class="col-12 col-sm-6">
                            <div class="noticias-sub">
                                <img :src="infoSecundario.acf.imagem.url" class="img-fluid" alt="" />
                                <div class="titulo">
                                    <router-link :to="`/informativo/${infoSecundario.slug}`" tag="a" class="nav-link" href="#">{{ infoSecundario.title.rendered }}</router-link>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6">
                            <div class="noticias-sub">
                                <img :src="infoTerceiro.acf.imagem.url" class="img-fluid" alt="">
                                <div class="titulo">
                                    <router-link :to="`/informativo/${infoTerceiro.slug}`" tag="a" class="nav-link" href="#">{{ infoTerceiro.title.rendered }}</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-4 mt-3 d-none d-lg-block">
                    <Phone/>
                </div>
            </div>
        </div>
        <div class="container-marketing">
            <div class="col-6 box-marketing text-right">
                <div class="texto-marketing-left">
                    <h2>Viva o hoje. <br /> O amanhã é com a gente</h2>
                    <h3>Investir em um seguro de vida significa garantir conforto e amparo financeiro para você e sua família em momentos difíceis.</h3>
                </div>
                <img src="./../../assets/images/marketing-1.png" height="420" alt="Marketing APEOC">
            </div>
            <div class="col-6 box-marketing">
                <div class="texto-marketing-right">
                    <h2>Segurança completa para você e sua família</h2>
                    <h3>Ter um seguro de vida significa mais tranquilidade na sua vida e mais cuidado com quem você ama.</h3>
                </div>
                <img src="./../../assets/images/marketing-2.png" height="390" alt="Marketing APEOC">
            </div>
        </div>
    </div>
</template>

<script>
    import Phone from '@/components/utils/Phone'
    import { api} from "../../service/api";

    export default {
        name: 'Home',
        components: {
            Phone
        },
        data () {
            return {
                sorteio: {},
                infoPrincipal: [],
                infoSecundario: [],
                infoTerceiro: []
            }
        },
        created() {
            this.getResultados()
            this.getInformativo()
        },
        methods: {
            getResultados() {
                api.get('sorteios?posts_per_page=1').then(response => {
                    this.sorteio = response.data[0].acf
                })
            },
            getInformativo() {
                api.get('posts').then(response => {
                    this.infoPrincipal = response.data[0]
                    this.infoSecundario = response.data[1]
                    this.infoTerceiro = response.data[2]
                })
            }
        }
    }
</script>