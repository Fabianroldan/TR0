<template>
  <div>
    <h1>Administración de preguntas</h1>

    <form ref="preguntaForm" @submit.prevent="editMode ? updatePregunta() : addPregunta()">
      <h1>{{ editMode ? "Editar pregunta" : "Crear preguntas" }}</h1>
      <label for="pregunta">Pregunta:</label>
      <input id="pregunta" type="text" v-model="nuevaPregunta.pregunta" placeholder="Pregunta" required />

      <div class="opciones-container">
        <div v-for="(opcion, index) in nuevaPregunta.opcions" :key="index" class="opcion-item">
          <label :for="'opcion' + (index + 1)">Opción {{ index + 1 }}:</label>
          <input type="text" :id="'opcion' + (index + 1)" v-model="opcion.resposta" :placeholder="'Opción ' + (index + 1)" required />
          <label>
            <input type="checkbox" v-model="opcion.correcta" />
            Correcta
          </label>
        </div>
      </div>

      <label for="imatge">Imagen URL:</label>
      <input id="imatge" type="text" v-model="nuevaPregunta.imatge" placeholder="Imagen URL" required />

      <label for="continente">Continente:</label>
      <input id="continente" type="text" v-model="nuevaPregunta.continente" placeholder="Continente" required />

      <label for="dificultat">Dificultad (1-4):</label>
      <input id="dificultat" type="number" v-model="nuevaPregunta.dificultat" placeholder="Dificultad (1-4)" min="1" max="4" required />

      <button type="submit">{{ editMode ? "Actualizar Pregunta" : "Agregar Pregunta" }}</button>
    </form>

    <div class="filtros-container">
      <div class="filtros">
        <label for="filtro-continente">Filtrar por continente:</label>
        <select id="filtro-continente" v-model="filtroContinente" @change="aplicarFiltros">
          <option value="">Todos</option>
          <option value="Asia">Asia</option>
          <option value="Europa">Europa</option>
          <option value="África">África</option>
          <option value="América">América</option>
          <option value="Oceanía">Oceanía</option>
        </select>

        <label for="filtro-dificultad">Filtrar por dificultad:</label>
        <select id="filtro-dificultad" v-model="filtroDificultad" @change="aplicarFiltros">
          <option value="">Todos</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
    </div>

    <ul>
      <li v-for="pregunta in preguntasFiltradas" :key="pregunta.id" class="pregunta-container">
        <div class="pregunta-content">
          <div class="pregunta-imagen-contenedor">
            <h2>{{ pregunta.id }} - {{ pregunta.pregunta }}</h2>
            <img v-if="pregunta.imatge" :src="pregunta.imatge" alt="Imagen de la pregunta" class="pregunta-imagen" />
            <p class="continente-dificultad">
              Continente: {{ pregunta.continente }} | Dificultad: {{ pregunta.dificultat }}
            </p>
          </div>
          <div class="respuestas">
            <div v-for="(opcion, index) in pregunta.opcions" :key="index" class="respuesta" :class="{ correct: opcion.correcta }">
              {{ opcion.resposta }} 
            </div>
          </div>
        </div>

        <div class="pregunta-actions">
          <button @click="editPregunta(pregunta)">Editar</button>
          <button @click="deletePregunta(pregunta.id)" class="eliminar-button">Eliminar</button>
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
        opcions: [
          { resposta: '', correcta: false },
          { resposta: '', correcta: false },
          { resposta: '', correcta: false },
          { resposta: '', correcta: false }
        ],
        imatge: '',
        continente: '',
        dificultad: null
      },
      editMode: false,
      preguntaId: null,
      filtroContinente: '',
      filtroDificultad: '',
    };
  },
  
  computed: {
    preguntasFiltradas() {
      return this.preguntas.filter(pregunta => {
        const coincideContinente = this.filtroContinente ? pregunta.continente === this.filtroContinente : true;
        const coincideDificultad = this.filtroDificultad ? pregunta.dificultat == this.filtroDificultad : true;
        return coincideContinente && coincideDificultad;
      });
    }
  },

  async mounted() {
    await this.fetchPreguntas();
  },

  methods: {
    async fetchPreguntas() {
      this.preguntas = await communicationManager.getPreguntas();
    },
    
    aplicarFiltros() {
      this.preguntasFiltradas;
    },

    async addPregunta() {
      const opciones = this.nuevaPregunta.opcions.filter(opcion => opcion.resposta.trim() !== '');
      this.nuevaPregunta.opcions = opciones;

      const addedPregunta = await communicationManager.addPregunta(this.nuevaPregunta);
      this.preguntas.push(addedPregunta);
      this.resetForm();
    },

    async editPregunta(pregunta) {
      this.nuevaPregunta = { ...pregunta };
      this.editMode = true;
      this.preguntaId = pregunta.id;
      
      this.$nextTick(() => {
        this.$refs.preguntaForm.scrollIntoView({ behavior: 'smooth' });
      });
    },
    
    async updatePregunta() {
      const opciones = this.nuevaPregunta.opcions.filter(opcion => opcion.resposta.trim() !== '');
      this.nuevaPregunta.opcions = opciones;

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
      this.nuevaPregunta = { 
        pregunta: '', 
        opcions: [
          { resposta: '', correcta: false },
          { resposta: '', correcta: false },
          { resposta: '', correcta: false },
          { resposta: '', correcta: false }
        ],
        imatge: '', 
        continente: '', 
        dificultad: null 
      };
      this.editMode = false;
      this.preguntaId = null;
    }
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

body {
  background-color: #e9ecef;
  font-family: 'Roboto', sans-serif;
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
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
  font-size: 1rem;
}

input[type="text"],
input[type="number"] {
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid black;
  border-radius: 4px;
  font-size: 1rem;
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
  margin-top: 0.5vh;
  cursor: pointer;
  font-size: 1rem;
  border: 1px solid black;
  transition: background-color 0.3s, transform 0.2s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
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
  flex-direction: column;
  background-color: white;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 1vh;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  border: 1px solid black;
  width: 60%;
}

.pregunta-content {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.pregunta-imagen-contenedor {
  flex: 1;
}

.pregunta-imagen {
  width: 750px;
  height: 450px;
  border: 1px solid black;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  object-fit: cover;
}

.respuestas {
  flex: 2;
  display: flex;
  margin-left: 5vh;
  flex-direction: column;
  justify-content: center;
  gap: 3vh;
  height: 100%;
  margin-top: 3,5vh;
}

.respuesta {
  width: 200px;
  height: 6vh;
  border: 1px solid black;
  padding: 10px;
  border-radius: 4px;
  text-align: center;
  background-color: red;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  font-size: 1.2rem;
  font-weight: bold; 
}

.correct {
  background-color: #28a745;
}

.pregunta-actions {
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  margin-top: 10px;
  margin-right: 24vh;
}

.opciones-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 1vh;
  gap: 0.4vh;
}

.opcion-item {
  flex: 1 1 calc(50% - 0.8vh);
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.eliminar-button {
  background-color: red;
  color: white;
  border: 1px solid black;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.eliminar-button:hover {
  background-color: darkred;
}

.continente-dificultad {
  text-align: center;
}

.filtros-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.filtros {
  background-color: white;
  padding: 15px;
  border: 1.5px solid black;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 60%;
  position: relative;
}

.filtros::after {
  content: '';
  width: 2px;
  height: 50px;
  background-color: black;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}


.filtros label {
  font-weight: bold;
  color: #333;
  margin-right: 10px;
}

.filtros select {
  width: 150px;
  padding: 10px;
  margin: 10px 5px;
  border: 1px solid black;
  border-radius: 4px;
  font-size: 1rem;
  background-color: #f2f2f2;
  transition: border-color 0.3s;
}

.filtros select:focus {
  border-color: black;
  outline: none;
}
</style>