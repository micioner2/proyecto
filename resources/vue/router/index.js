
import  { createRouter, createWebHistory}  from 'vue-router';

const Laboratorio  = () => import('../components/registros/laboratorio/Index.vue');
// import Laboratorio from '../components/registros/laboratorio/Index.vue'

const routes = [
    {
        path:'/laboratorio',
        name:"laboratorio",
        component: Laboratorio
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
});