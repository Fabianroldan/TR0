<template>
    <div>
        <h1>Agregar Nueva Pregunta</h1>
        <input v-model="nuevaPregunta" placeholder="Pregunta" />
        <button @click="addPregunta">Agregar</button>
    </div>
</template>

<script>
import { createPregunta } from '../communicationManager';

export default {
    data() {
        return {
            nuevaPregunta: ''
        };
    },
    methods: {
        async addPregunta() {
            const pregunta = { pregunta: this.nuevaPregunta, opcions: [] };
            await createPregunta(pregunta);
            this.$emit('added');
            this.nuevaPregunta = '';
        }
    }
};
</script>