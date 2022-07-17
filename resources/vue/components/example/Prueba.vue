<template>
    <h1>{{userStore.contador}}</h1>
    <br>
    <h1>{{userStore.mayuscula}}</h1>
    <hr>
    <h1>{{textMinuscula}}</h1>
</template>

<script>

import {useUserStore} from '../../stores/user'
export default {
    setup(){
        const userStore = useUserStore();
        const textMinuscula = userStore.nombre.toLowerCase();

        return {
            userStore,
            textMinuscula
        }
    }

}
</script>