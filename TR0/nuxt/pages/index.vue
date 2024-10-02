<template>
  <div>
    <h1>Preguntas</h1>
    
    <form @submit.prevent="addPregunta">
      <input v-model="nuevaPregunta.pregunta" placeholder="Pregunta" required />
      <input v-model="nuevaPregunta.opcions" placeholder="Opciones (separadas por comas)" required />
      <input v-model="nuevaPregunta.imatge" placeholder="Imagen URL" required />
      <input v-model="nuevaPregunta.continente" placeholder="Continente" required />
      <input type="number" v-model="nuevaPregunta.dificultad" placeholder="Dificultad (1-4)" min="1" max="4" required />
      <button type="submit">Agregar Pregunta</button>
    </form>

    <ul>
      <li v-for="pregunta in preguntas" :key="pregunta.id">
        <p>{{ pregunta.pregunta }}</p>
        <p>Opciones:</p>
        <ul>
          <li v-for="opcion in pregunta.opcions" :key="opcion.resposta">
            {{ opcion.resposta }} ({{ opcion.correcta ? 'Correcta' : 'Incorrecta' }})
          </li>
        </ul>
        <p>Continente: {{ pregunta.continente }}</p>
        <p>Dificultad: {{ pregunta.dificultad }}</p>
        <img v-if="pregunta.imatge" :src="pregunta.imatge" alt="Imagen de la pregunta" />
        <button @click="editPregunta(pregunta)">Editar</button>
        <button @click="deletePregunta(pregunta.id)">Eliminar</button>
      </li>
    </ul>
  </div>
</template>

<script>
import communicationManager from '../communicationManager';

export default {
  data() {
    return {
      preguntas: [],
      nuevaPregunta: {
        pregunta: '',
        opcions: [],
        imatge: '',
        continente: '',
        dificultad: null
      },
      editMode: false,
      preguntaId: null,
    };
  },
  
  async mounted() {
    await this.fetchPreguntas();
  },

  methods: {
    async fetchPreguntas() {
      this.preguntas = await communicationManager.getPreguntas();
    },
    
    async addPregunta() {
      this.nuevaPregunta.opcions = this.nuevaPregunta.opcions.split(',').map(opcion => opcion.trim());
      
      const addedPregunta = await communicationManager.addPregunta(this.nuevaPregunta);
      this.preguntas.push(addedPregunta);
      this.resetForm();
    },

    async editPregunta(pregunta) {
      this.nuevaPregunta = { ...pregunta };
      this.editMode = true;
      this.preguntaId = pregunta.id;
    },

    async updatePregunta() {
      this.nuevaPregunta.opcions = this.nuevaPregunta.opcions.split(',').map(opcion => opcion.trim());

      const updatedPregunta = await communicationManager.updatePregunta(this.preguntaId, this.nuevaPregunta);
      const index = this.preguntas.findIndex(p => p.id === this.preguntaId);
      this.$set(this.preguntas, index, updatedPregunta);
      this.resetForm();
    },

    async deletePregunta(id) {
      await communicationManager.deletePregunta(id);
      this.preguntas = this.preguntas.filter(p => p.id !== id);
    },

    resetForm() {
      this.nuevaPregunta = { pregunta: '', opcions: [], imatge: '', continente: '', dificultad: null };
      this.editMode = false;
      this.preguntaId = null;
    }
  }
};
</script>

<style scoped>
</style>
