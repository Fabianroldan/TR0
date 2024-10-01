<template>
    <div>
        <button @click="toggleEdit">{{ isEditing ? 'Cancelar' : 'Editar' }}</button>
        <div v-if="isEditing">
            <input v-model="updatedPregunta" />
            <button @click="updatePregunta">Actualizar</button>
        </div>
    </div>
</template>

<script>
import { updatePregunta } from '../communicationManager';

export default {
    props: ['pregunta'],
    data() {
        return {
            isEditing: false,
            updatedPregunta: this.pregunta.pregunta
        };
    },
    methods: {
        async updatePregunta() {
            await updatePregunta(this.pregunta.id, { pregunta: this.updatedPregunta, opcions: [] });
            this.$emit('update');
            this.isEditing = false;
        },
        toggleEdit() {
            this.isEditing = !this.isEditing;
        }
    }
};
</script>