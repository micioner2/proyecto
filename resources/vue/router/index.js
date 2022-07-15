
import  { createRouter, createWebHistory}  from 'vue-router';


const Laboratorio  = require('../components/registros/laboratorio/Index.vue').default;

const baseUrl = "/proyecto/public/";
const routes = [
    {
        path: baseUrl+'/laboratorio',
        name:"laboratorio",
        // props: { ruta: apiUrl } ,
        component: Laboratorio
    }

]

export const router = createRouter({
    history: createWebHistory(),
    routes,
    // base: process.env.BASE_URL,
});
