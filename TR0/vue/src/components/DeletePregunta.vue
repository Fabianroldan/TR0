<template>
    <div>
        <button @click="deletePregunta">Eliminar</button>
    </div>
</template>

<script>
import { deletePregunta } from '../communicationManager';

export default {
    props: ['preguntaId'],
    methods: {
        async deletePregunta() {
            await deletePregunta(this.preguntaId);
            this.$emit('delete');
        }
    }
};
</script>