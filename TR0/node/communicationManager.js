const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 5000;

app.use(express.json());

let preguntas = [];

app.get('/preguntas', (req, res) => {
    res.json(preguntas);
});

app.post('/preguntas', (req, res) => {
    const nuevaPregunta = req.body;
    preguntas.push(nuevaPregunta);
    res.status(201).json(nuevaPregunta);
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
