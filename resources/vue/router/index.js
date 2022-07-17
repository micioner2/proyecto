
import  { createRouter, createWebHistory}  from 'vue-router';


const Laboratorio  = require('../components/registros/laboratorio/Index.vue').default;
const Prueba  = require('../components/example/Prueba.vue').default;

const baseUrl = "/proyecto/public/";
const routes = [
    {
        path: baseUrl+'/laboratorio',
        name:"laboratorio",
        // props: { ruta: apiUrl } ,
        component: Laboratorio
    },

    {
        path: baseUrl+'/prueba',
        name:"prueba",
        // props: { ruta: apiUrl } ,
        component: Prueba
    }

]

export const router = createRouter({
    history: createWebHistory(),
    routes,
    // base: process.env.BASE_URL,
});
