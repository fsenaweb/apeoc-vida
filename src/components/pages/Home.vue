<template>
    <div>
        <div class="container container-home mb-5">
            <div class="row mb-2">
                <div class="col-7 mr-4">
                    <div class="topicos">
                        <h1> [ Informativo ] </h1>
                    </div>
                    <div class="noticias">
                        <img src="http://lorempixel.com/740/480/sports" class="img-fluid" alt="">
                        <div class="titulo p-3">
                            <h4>Mussum Ipsum, cacilds vidis litro abertis. Si num tem leite então bota uma pinga aí
                                cumpadi</h4>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="topicos">
                        <h1> [ Sorteios ] </h1>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title h2 mb-3">Sorteio Semanal</h5>
                            <h6 class="card-subtitle mb-3 text-black small">Extração da Loteria Federal em
                                25/01/2020</h6>
                            <p class="card-text">1º Prêmio: 13580</p>
                            <p class="card-text">2º Prêmio: 38219</p>
                            <p class="card-text">3º Prêmio: 88440</p>
                            <p class="card-text">4º Prêmio: 74888</p>
                            <p class="card-text">5º Prêmio: 47449</p>
                            <h6 class="card-subtitle mt-4 text-center text-black small">Contemplado em 25/01/2020:</h6>
                            <h5 class="card-subtitle mt-1 display-5 text-center text-black font-weight-bold">09089</h5>
                            <button class="btn btn-danger btn-block mt-2">Sorteiros Anteriores</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-7 mr-4">
                    <div class="row mt-3 pl-1">
                        <div class="col-6">
                            <div class="noticias-sub">
                                <img src="http://lorempixel.com/335/180/sports" class="img-fluid" alt="">
                                <div class="titulo p-1">
                                    <div>Mussum Ipsum, cacilds vidis litro abertis. Si num tem leite então bota uma
                                        pinga aí
                                        cumpadi
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="noticias-sub">
                                <img src="http://lorempixel.com/335/180/sports" class="img-fluid" alt="">
                                <div class="titulo p-1">
                                    <div>Mussum Ipsum, cacilds vidis litro abertis. Si num tem leite então bota uma
                                        pinga aí
                                        cumpadi
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="col-4">
                    <Phone/>
                </div>
            </div>
        </div>
        <div class="container-marketing">
            <div class="col-6 box-marketing text-right" style="border: 1px solid red;">
                <div class="texto-marketing-left">
                    <h2>Viva o hoje. <br /> O amanhã é com a gente</h2>
                    <h3>Investir em um seguro de vida significa garantir conforto e amparo financeiro para você e sua família em momentos difíceis.</h3>
                </div>
                <img src="./../../assets/images/marketing-1.png" height="420" alt="Marketing APEOC">
            </div>
            <div class="col-6 box-marketing" style="border: 1px solid red;">
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

    export default {
        name: 'Home',
        components: {
            Phone
        }
    }
</script>