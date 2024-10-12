const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const multer = require('multer'); // Importar multer

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Middleware para servir archivos estáticos desde la carpeta 'images'
app.use('/images', express.static(path.join(__dirname, 'images')));

// Configuración de multer para guardar imágenes en la carpeta 'images'
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images'); // Carpeta donde se guardan las imágenes
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname); // Guarda la imagen con su nombre original
    }
});
const upload = multer({ storage });

// Inicializar el arreglo de preguntas
let preguntas = [];

// Cargar preguntas desde el archivo JSON
const cargarPreguntas = () => {
    const data = fs.readFileSync(path.join(__dirname, '../preguntes.json'));
    preguntas = JSON.parse(data).preguntes;
};

// Guardar preguntas en el archivo JSON
const guardarPreguntas = () => {
    fs.writeFileSync(path.join(__dirname, '../preguntes.json'), JSON.stringify({ preguntes: preguntas }, null, 2));
};

// Generar preguntas aleatorias, permitiendo filtrar por dificultad
const generarPreguntasAleatorias = (cantidad = 10, dificultad) => {
    const preguntasFiltradas = dificultad 
        ? preguntas.filter(p => p.dificultat == dificultad) 
        : preguntas; // Si no se especifica dificultad, toma todas

    const preguntasAleatorias = [];

    while (preguntasAleatorias.length < cantidad && preguntasFiltradas.length > 0) {
        const randomIndex = Math.floor(Math.random() * preguntasFiltradas.length);
        preguntasAleatorias.push(preguntasFiltradas[randomIndex]);
        preguntasFiltradas.splice(randomIndex, 1);
    }

    return preguntasAleatorias;
};

// Cargar las preguntas al iniciar el servidor
cargarPreguntas();

// Endpoint para obtener preguntas aleatorias
app.get('/preguntas', (req, res) => {
    const { dificultad } = req.query; // Obtenemos la dificultad de los parámetros de consulta
    const preguntasAleatorias = generarPreguntasAleatorias(10, dificultad); // Generamos preguntas con dificultad
    
    console.log("Preguntas aleatorias: ", preguntasAleatorias);
    res.json(preguntasAleatorias);
});

// Endpoint para obtener una pregunta específica por ID
app.get('/preguntas/:id', (req, res) => {
    const { id } = req.params;
    const pregunta = preguntas.find(p => p.id == id);

    if (!pregunta) {
        return res.status(404).json({ mensaje: 'Pregunta no encontrada' });
    }

    res.json(pregunta);
});

// Endpoint para subir imágenes
app.post('/upload', upload.single('imagen'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ mensaje: 'No se ha subido ninguna imagen' });
    }
    res.status(201).json({ mensaje: 'Imagen subida correctamente', file: req.file });
});

// Endpoint para agregar una nueva pregunta
app.post('/preguntas', (req, res) => {
    const nuevaPregunta = { id: preguntas.length + 1, ...req.body };
    preguntas.push(nuevaPregunta);
    guardarPreguntas();
    res.status(201).json(nuevaPregunta);
});

// Endpoint para actualizar una pregunta existente
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

// Endpoint para eliminar una pregunta
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

// Endpoint para obtener preguntas filtradas por continente
app.get('/preguntas/continente/:continente', (req, res) => {
    const { continente } = req.params;
    const preguntasFiltradas = preguntas.filter(p => p.continente.toLowerCase() === continente.toLowerCase());

    if (preguntasFiltradas.length === 0) {
        return res.status(404).json({ mensaje: 'No se encontraron preguntas para el continente especificado' });
    }

    res.json(preguntasFiltradas);
});

// Endpoint para obtener preguntas filtradas por dificultad
app.get('/preguntas/dificultad/:dificultad', (req, res) => {
    const { dificultad } = req.params;
    const preguntasFiltradas = preguntas.filter(p => p.dificultat == dificultad);

    if (preguntasFiltradas.length === 0) {
        return res.status(404).json({ mensaje: 'No se encontraron preguntas para la dificultad especificada' });
    }

    res.json(preguntasFiltradas);
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}/preguntas`);
});
