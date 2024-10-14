const API_URL = 'http://localhost:5000';
// const API_PROD = 'http://tr0.a21fabrolfer.inspedralbes.cat';

const communicationManager = {
  async getPreguntas() {
    try {
      const response = await fetch(`${API_URL}/preguntas/all`);
      if (!response.ok) {
        throw new Error('Error al obtener las preguntas');
      }
      return await response.json();
    } catch (error) {
      console.error('Error al obtener las preguntas:', error);
      return [];
    }
  },

  async addPregunta(pregunta) {
    try {
      const response = await fetch(`${API_URL}/preguntas`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(pregunta),
      });
      if (!response.ok) {
        throw new Error('Error al agregar la pregunta');
      }
      return await response.json();
    } catch (error) {
      console.error('Error al agregar la pregunta:', error);
      return null;
    }
  },

  async updatePregunta(id, pregunta) {
    try {
      const response = await fetch(`${API_URL}/preguntas/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(pregunta),
      });
      if (!response.ok) {
        throw new Error('Error al actualizar la pregunta');
      }
      return await response.json();
    } catch (error) {
      console.error('Error al actualizar la pregunta:', error);
      return null;
    }
  },

  async deletePregunta(id) {
    try {
      const response = await fetch(`${API_URL}/preguntas/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Error al eliminar la pregunta');
      }
    } catch (error) {
      console.error('Error al eliminar la pregunta:', error);
    }
  },
};

export default communicationManager;
