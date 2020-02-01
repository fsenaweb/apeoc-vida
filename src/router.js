import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from "./components/pages/Home";
import Produto from "./components/pages/Produto";
import Coberturas from "./components/pages/Coberturas";
import Morte from "./components/pages/coberturas/Morte";
import Invalidez from "./components/pages/coberturas/Invalidez";
import Cancer from "./components/pages/coberturas/Cancer";
import Funeral from "./components/pages/coberturas/Funeral";
import Sorteio from "./components/pages/coberturas/Sorteio";
import Seguradora from "./components/pages/Seguradora";
import Sorteios from "./components/pages/Sorteios";

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/produto',
            component: Produto
        },
        {
            path: '/seguradora',
            component: Seguradora
        },
        {
            path: '/sorteios',
            component: Sorteios
        },
        {
            name: 'Coberturas',
            path: '/coberturas',
            component: Coberturas,
            children: [
                {
                    path: 'morte-qualquer-causa',
                    component: Morte
                },
                {
                    path: 'invalidez',
                    component: Invalidez
                },
                {
                    path: 'cancer',
                    component: Cancer
                },
                {
                    path: 'funeral',
                    component: Funeral
                },
                {
                    path: 'sorteio',
                    component: Sorteio
                },
            ]
        }
    ]
});


export default router;