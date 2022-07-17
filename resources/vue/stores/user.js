import {defineStore} from 'pinia'

export const useUserStore = defineStore('userStore',{
    state:() => {
        return{
            contador:0,
            nombre:"Mauricio"
        }
    },

    getters:{
        mayuscula: (state) => {return state.nombre.toUpperCase()}
    },

    actions:{
        incrementar(){
            this.contador++
        },

        disminuir(){
            this.contador <= 0 ? 0 : this.contador--
        }
    }
});