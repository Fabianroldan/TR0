export default {
    async getPreguntas() {
        const response = await fetch('http://localhost:5000/preguntas');
        return response.json();
    },
    
    async addPregunta(pregunta) {
        const response = await fetch('http://localhost:5000/preguntas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(pregunta)
        });
        return response.json();
    },

    async updatePregunta(id, pregunta) {
        const response = await fetch(`http://localhost:5000/preguntas/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(pregunta)
        });
        return response.json();
    },

    async deletePregunta(id) {
        const response = await fetch(`http://localhost:5000/preguntas/${id}`, {
            method: 'DELETE'
        });
        return response.json();
    }
}
