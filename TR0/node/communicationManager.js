const API_URL = 'http://localhost:3000/preguntas';

async function getPreguntas() {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error('Error al obtener preguntas');
    }
    return response.json();
}

async function getPregunta(id) {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) {
        throw new Error('Error al obtener la pregunta');
    }
    return response.json();
}

async function createPregunta(pregunta) {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pregunta)
    });
    if (!response.ok) {
        throw new Error('Error al crear la pregunta');
    }
    return response.json();
}

async function updatePregunta(id, pregunta) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pregunta)
    });
    if (!response.ok) {
        throw new Error('Error al actualizar la pregunta');
    }
    return response.json();
}

async function deletePregunta(id) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
    });
    if (!response.ok) {
        throw new Error('Error al eliminar la pregunta');
    }
    return response.json();
}

export { getPreguntas, getPregunta, createPregunta, updatePregunta, deletePregunta };
