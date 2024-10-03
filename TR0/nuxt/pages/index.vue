<template>
  <div>
    <h1>Administración de preguntas</h1>
    
    <form @submit.prevent="addPregunta">
      <h1>Crear preguntas</h1>
      <label for="pregunta">Pregunta</label>
      <input id="pregunta" type="text" v-model="nuevaPregunta.pregunta" placeholder="Pregunta" required />
      
      <label for="opcions">Opciones (separadas por comas)</label>
      <input id="opcions" type="text" v-model="nuevaPregunta.opcions" placeholder="Opciones (separadas por comas)" required />
      
      <label for="imatge">Imagen URL</label>
      <input id="imatge" type="text" v-model="nuevaPregunta.imatge" placeholder="Imagen URL" required />
      
      <label for="continente">Continente</label>
      <input id="continente" type="text" v-model="nuevaPregunta.continente" placeholder="Continente" required />
      
      <label for="dificultat">Dificultad (1-4)</label>
      <input id="dificultat" type="number" v-model="nuevaPregunta.dificultat" placeholder="Dificultad (1-4)" min="1" max="4" required />
      
      <button type="submit">Agregar Pregunta</button>
    </form>

    <ul>
      <li v-for="pregunta in preguntas" :key="pregunta.id" class="pregunta-container">
        <div class="pregunta">
          <h2>{{ pregunta.pregunta }}</h2>
          <img v-if="pregunta.imatge" :src="pregunta.imatge" alt="Imagen de la pregunta" class="pregunta-imagen" />
        </div>
        <div class="respuestas">
          <div v-for="(opcion, index) in pregunta.opcions" :key="index" class="respuesta" :class="{ correct: opcion.correcta }">
            {{ opcion.resposta }} 
          </div>
        </div>
        <div class="pregunta-actions">
          <button @click="editPregunta(pregunta)">Editar</button>
          <button @click="deletePregunta(pregunta.id)">Eliminar</button>
        </div>
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
body {
  background-color: #e9ecef;
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 20px;
}

h1 {
  color: black;
  text-align: center;
  margin-bottom: 30px;
  font-size: 2rem;
}

form {
  background-color: white;
  padding: 20px;
  border: 1.5px solid black;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
}

input[type="text"],
input[type="number"] {
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid black;
  border-radius: 4px;
  font-size: 16px;
  background-color: #f2f2f2;
  transition: border-color 0.3s;
  box-sizing: border-box;
}

input[type="text"]:focus,
input[type="number"]:focus {
  border-color: black;
  outline: none;
}

button {
  background-color: #28a745;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s, transform 0.2s;
}

button:hover {
  background-color: #218838;
  transform: translateY(-2px);
}

ul {
  list-style-type: none;
  padding: 0;
}

.pregunta-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin: 10px 0;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
}

.pregunta {
  flex: 1;
  margin-right: 20px;
  text-align: center;
}

.pregunta-imagen {
  width: 750px;
  height: 500px;
  object-fit: cover;
  margin-top: 10px;
}

.respuestas {
  display: flex;
  flex-direction: column;
}

.respuesta {
  border: 1px solid black;
  padding: 10px;
  margin: 5px 0;
  border-radius: 4px;
  text-align: center;
  color: red;
}

.correct {
  color: green;
}

.pregunta-actions {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  gap: 10px;
}
</style>
