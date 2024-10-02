<template>
  <div>
    <h1>Preguntas</h1>
    
    <form @submit.prevent="addPregunta">
      <input v-model="nuevaPregunta.pregunta" placeholder="Pregunta" required />
      <input v-model="nuevaPregunta.opcions" placeholder="Opciones (separadas por comas)" required />
      <input v-model="nuevaPregunta.imatge" placeholder="Imagen URL" required />
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
        imatge: ''
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
      // Transformar las opciones de texto a un array
      this.nuevaPregunta.opcions = this.nuevaPregunta.opcions.split(',').map(opcion => opcion.trim());
      
      const addedPregunta = await communicationManager.addPregunta(this.nuevaPregunta);
      this.preguntas.push(addedPregunta);
      this.resetForm();
    },

    async editPregunta(pregunta) {
      this.nuevaPregunta = { ...pregunta };  // Cargar la pregunta en el formulario
      this.editMode = true;
      this.preguntaId = pregunta.id;
    },

    async updatePregunta() {
      // Aquí iría la lógica para actualizar
      // similar a addPregunta, pero usando updatePregunta
    },

    async deletePregunta(id) {
      await communicationManager.deletePregunta(id);
      this.preguntas = this.preguntas.filter(p => p.id !== id);
    },

    resetForm() {
      this.nuevaPregunta = { pregunta: '', opcions: [], imatge: '' };
      this.editMode = false;
      this.preguntaId = null;
    }
  }
};
</script>

<style scoped>
/* Agrega tus estilos aquí */
</style>
