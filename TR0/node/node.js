const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const multer = require('multer');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use('/images', express.static(path.join(__dirname, 'images')));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage });

let preguntas = [];

const cargarPreguntas = () => {
    const data = fs.readFileSync(path.join(__dirname, '../preguntes.json'));
    preguntas = JSON.parse(data).preguntes;
};

const guardarPreguntas = () => {
    fs.writeFileSync(path.join(__dirname, '../preguntes.json'), JSON.stringify({ preguntes: preguntas }, null, 2));
};

const generarPreguntasAleatorias = (cantidad = 10, dificultad) => {
    const preguntasFiltradas = dificultad 
        ? preguntas.filter(p => p.dificultat == dificultad) 
        : preguntas;

    const preguntasAleatorias = [];

    while (preguntasAleatorias.length < cantidad && preguntasFiltradas.length > 0) {
        const randomIndex = Math.floor(Math.random() * preguntasFiltradas.length);
        const pregunta = preguntasFiltradas[randomIndex];

        const respuestasDesordenadas = [...pregunta.respuestas];
        const respuestaCorrecta = pregunta.respuestaCorrecta;

        respuestasDesordenadas.splice(respuestasDesordenadas.indexOf(respuestaCorrecta), 1);
        respuestasDesordenadas.push(respuestaCorrecta);

        const respuestasAleatorias = respuestasDesordenadas.sort(() => Math.random() - 0.5);

        console.log(`Pregunta: ${pregunta.pregunta}, Respuestas desordenadas: ${JSON.stringify(respuestasAleatorias)}`);

        preguntasAleatorias.push({
            ...pregunta,
            respuestas: respuestasAleatorias
        });

        preguntasFiltradas.splice(randomIndex, 1);
    }

    return preguntasAleatorias;
};

cargarPreguntas();

app.get('/preguntas', (req, res) => {
    const { dificultad } = req.query;
    const preguntasAleatorias = generarPreguntasAleatorias(10, dificultad);
    
    console.log("Preguntas aleatorias: ", preguntasAleatorias);
    res.json(preguntasAleatorias);
});

app.get('/preguntas/all', (req, res) => {
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

app.post('/upload', upload.single('imagen'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ mensaje: 'No se ha subido ninguna imagen' });
    }
    res.status(201).json({ mensaje: 'Imagen subida correctamente', file: req.file });
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
    // console.log(`Servidor corriendo en http://tr0.a21fabrolfer.inspedralbes.cat`);
});
