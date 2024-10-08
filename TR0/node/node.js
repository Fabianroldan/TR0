const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let preguntas = [];

const cargarPreguntas = () => {
    const data = fs.readFileSync(path.join(__dirname, '../preguntes.json'));
    preguntas = JSON.parse(data).preguntes;
};

const guardarPreguntas = () => {
    fs.writeFileSync(path.join(__dirname, '../preguntes.json'), JSON.stringify({ preguntes: preguntas }, null, 2));
};

const generarPreguntasAleatorias = (cantidad = 10) => {
    const dificultadAleatoria = Math.floor(Math.random() * 4) + 1;
    const preguntasFiltradas = preguntas.filter(p => p.dificultat === dificultadAleatoria);
    const preguntasAleatorias = [];

    while (preguntasAleatorias.length < cantidad && preguntasFiltradas.length > 0) {
        const randomIndex = Math.floor(Math.random() * preguntasFiltradas.length);
        preguntasAleatorias.push(preguntasFiltradas[randomIndex]);
        preguntasFiltradas.splice(randomIndex, 1);
    }

    return { dificultad: dificultadAleatoria, preguntas: preguntasAleatorias };
};

cargarPreguntas();

const { dificultad, preguntas: preguntasAleatorias } = generarPreguntasAleatorias(10);
console.log(`Preguntas Aleatorias de Dificultad ${dificultad}:`, JSON.stringify(preguntasAleatorias, null, 2));

app.get('/preguntas', (req, res) => {
    res.json(preguntas);
});

app.get('/preguntas/:id', (req, res) => {
    const { id } = req.params;
    const pregunta = preguntas.find(p => p.id == id);

    if (!pregunta) {
        return res.status(404).json({ mensaje: 'Pregunta no encontrada' });
    }

    res.json(pregunta);
});

app.post('/preguntas', (req, res) => {
    const nuevaPregunta = { id: preguntas.length + 1, ...req.body };
    preguntas.push(nuevaPregunta);
    guardarPreguntas();
    res.status(201).json(nuevaPregunta);
});

app.put('/preguntas/:id', (req, res) => {
    const { id } = req.params;
    const preguntaIndex = preguntas.findIndex(p => p.id == id);

    if (preguntaIndex === -1) {
        return res.status(404).json({ mensaje: 'Pregunta no encontrada' });
    }

    preguntas[preguntaIndex] = { ...preguntas[preguntaIndex], ...req.body };
    guardarPreguntas();
    res.json(preguntas[preguntaIndex]);
});

app.delete('/preguntas/:id', (req, res) => {
    const { id } = req.params;
    const preguntaIndex = preguntas.findIndex(p => p.id == id);

    if (preguntaIndex === -1) {
        return res.status(404).json({ mensaje: 'Pregunta no encontrada' });
    }

    preguntas.splice(preguntaIndex, 1);
    guardarPreguntas();
    res.status(200).json({ mensaje: 'Pregunta eliminada correctamente' });
});

app.get('/preguntas/continente/:continente', (req, res) => {
    const { continente } = req.params;
    const preguntasFiltradas = preguntas.filter(p => p.continente.toLowerCase() === continente.toLowerCase());

    if (preguntasFiltradas.length === 0) {
        return res.status(404).json({ mensaje: 'No se encontraron preguntas para el continente especificado' });
    }

    res.json(preguntasFiltradas);
});

app.get('/preguntas/dificultad/:dificultad', (req, res) => {
    const { dificultad } = req.params;
    const preguntasFiltradas = preguntas.filter(p => p.dificultat == dificultad);

    if (preguntasFiltradas.length === 0) {
        return res.status(404).json({ mensaje: 'No se encontraron preguntas para la dificultad especificada' });
    }

    res.json(preguntasFiltradas);
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}/preguntas`);
});
