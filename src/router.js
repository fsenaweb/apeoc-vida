import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from "./components/pages/Home";
import Produto from "./components/pages/Produto";

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
        }
    ]
});


export default router;