<template>
    <div>
        <h1>Lista de Preguntas</h1>
        <ul>
            <li v-for="pregunta in preguntas" :key="pregunta.id">
                {{ pregunta.pregunta }}
                <UpdatePregunta :pregunta="pregunta" @update="fetchPreguntas"/>
                <DeletePregunta :preguntaId="pregunta.id" @delete="fetchPreguntas"/>
            </li>
        </ul>
    </div>
</template>

<script>
import { getPreguntas } from '../communicationManager';
import UpdatePregunta from './UpdatePregunta.vue';
import DeletePregunta from './DeletePregunta.vue';

export default {
    data() {
        return {
            preguntas: []
        };
    },
    async created() {
        await this.fetchPreguntas();
    },
    methods: {
        async fetchPreguntas() {
            this.preguntas = await getPreguntas();
        }
    },
    components: {
        UpdatePregunta,
        DeletePregunta
    }
};
</script>