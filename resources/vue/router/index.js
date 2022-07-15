
import  { createRouter, createWebHistory}  from 'vue-router';
import { apiUrl } from './config-app';


const Laboratorio  = require('../components/registros/laboratorio/Index.vue').default;
const Asistente  = require('../components/registros/laboratorio/Asistente.vue').default;

const baseUrl = "/proyecto/public/";
const routes = [
    {
        path: baseUrl+'/laboratorio',
        name:"laboratorio",
        props: { ruta: apiUrl } ,
        component: Laboratorio
    },

    {
        path: baseUrl+'/asistente',
        name:"asistente",
        props: { ruta: apiUrl } ,
        component: Asistente
    }

]

export const router = createRouter({
    history: createWebHistory(),
    routes,
    // base: process.env.BASE_URL,
});
