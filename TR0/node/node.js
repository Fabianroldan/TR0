const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let preguntas = [];

// Función para cargar preguntas desde un archivo JSON
async function getPreguntas() {
    const filePath = path.join(__dirname, '../preguntes.json');

    // Intenta cargar desde el archivo
    try {
        const data = await fs.promises.readFile(filePath, 'utf8');
        preguntas = JSON.parse(data);
        console.log('Preguntas cargadas desde el archivo:', preguntas);
    } catch (err) {
        console.error('Error al obtener preguntas desde el archivo:', err);
    }
}

// Llamar a la función al inicio para cargar preguntas
getPreguntas();

// Rutas de la API
app.get('/preguntas', (req, res) => {
    res.json(preguntas);
});

app.get('/preguntas/:id', (req, res) => {
    const pregunta = preguntas.find(p => p.id === parseInt(req.params.id));
    if (pregunta) {
        res.json(pregunta);
    } else {
        res.status(404).send('Pregunta no encontrada');
    }
});

app.post('/preguntas', (req, res) => {
    const { pregunta, opcions, imatge, continente, dificultad } = req.body;
    if (!pregunta || !Array.isArray(opcions) || opcions.length === 0 || !imatge || !continente || typeof dificultad !== 'number') {
        return res.status(400).json({ error: 'Invalid input format' });
    }
    const id = preguntas.length > 0 ? preguntas[preguntas.length - 1].id + 1 : 1;
    const nuevaPregunta = { id, pregunta, opcions, imatge, continente, dificultad };
    preguntas.push(nuevaPregunta);
    res.json(nuevaPregunta);
});

app.put('/preguntas/:id', (req, res) => {
    const index = preguntas.findIndex(p => p.id === parseInt(req.params.id));
    if (index !== -1) {
        preguntas[index] = { id: parseInt(req.params.id), ...req.body };
        res.json(preguntas[index]);
    } else {
        res.status(404).send('Pregunta no encontrada');
    }
});

app.delete('/preguntas/:id', (req, res) => {
    const index = preguntas.findIndex(p => p.id === parseInt(req.params.id));
    if (index !== -1) {
        preguntas.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).send('Pregunta no encontrada');
    }
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}/preguntas`);
});
