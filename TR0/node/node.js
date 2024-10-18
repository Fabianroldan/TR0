// Importar dependencias necesarias
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const { exec } = require('child_process'); // Para ejecutar el script de Python

// Configuración de la aplicación Express
const app = express();
const PORT = 5000;

// Middleware para habilitar CORS y permitir el uso de JSON
app.use(cors());
app.use(express.json());

// Configuración para servir archivos estáticos desde la carpeta "images"
app.use('/images', express.static(path.join(__dirname, 'images')));

// Configuración de Multer para subir archivos y guardarlos en la carpeta "images"
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images'); // Guardar las imágenes en la carpeta "images"
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname); // Guardar con el nombre original del archivo
    }
});
const upload = multer({ storage });

// Variable para almacenar las preguntas cargadas desde el archivo JSON
let preguntas = [];

// Variable para almacenar las estadísticas
let estadisticas = {
    dadesPerPregunta: []
};

// Función para cargar preguntas y estadísticas desde archivos JSON
const cargarDatos = () => {
    // Cargar preguntas
    const preguntasData = fs.readFileSync(path.join(__dirname, '../preguntes.json'));
    preguntas = JSON.parse(preguntasData).preguntes;

    // Cargar estadísticas
    if (fs.existsSync(path.join(__dirname, '../estadisticas.json'))) {
        const estadisticasData = fs.readFileSync(path.join(__dirname, '../estadisticas.json'));
        estadisticas = JSON.parse(estadisticasData);
    }
};

// Función para guardar estadísticas en el archivo JSON
const guardarEstadisticas = () => {
    fs.writeFileSync(path.join(__dirname, '../estadisticas.json'), JSON.stringify(estadisticas, null, 2));
};

// Función para generar preguntas aleatorias según la dificultad y la cantidad especificada
const generarPreguntasAleatorias = (cantidad = 10, dificultad) => {
    const preguntasFiltradas = dificultad 
        ? preguntas.filter(p => p.dificultat === dificultad) 
        : preguntas;

    const preguntasAleatorias = [];

    while (preguntasAleatorias.length < cantidad && preguntasFiltradas.length > 0) {
        const randomIndex = Math.floor(Math.random() * preguntasFiltradas.length);
        preguntasAleatorias.push(preguntasFiltradas[randomIndex]);
        preguntasFiltradas.splice(randomIndex, 1);
    }

    return preguntasAleatorias;
};

// Cargar las preguntas y estadísticas al iniciar el servidor
cargarDatos();

// Rutas para gestionar las preguntas
app.get('/preguntas', (req, res) => {
    const { dificultad } = req.query;
    const preguntasAleatorias = generarPreguntasAleatorias(10, dificultad);
    
    console.log("Preguntas aleatorias: ", preguntasAleatorias);
    res.json(preguntasAleatorias);
});

// Endpoint para registrar respuestas
app.post('/respuestas', (req, res) => {
    const { id, correcta } = req.body;

    // Actualizar estadísticas
    let preguntaEstadistica = estadisticas.dadesPerPregunta.find(item => item.id === id);
    if (!preguntaEstadistica) {
        preguntaEstadistica = { id, correctes: 0, intents: 0 };
        estadisticas.dadesPerPregunta.push(preguntaEstadistica);
    }

    // Incrementar el conteo de intentos
    preguntaEstadistica.intents += 1;

    // Incrementar el conteo de respuestas correctas
    if (correcta) {
        preguntaEstadistica.correctes += 1;
    }

    guardarEstadisticas(); // Guardar estadísticas después de cada respuesta

    res.status(200).json({ message: 'Respuesta registrada con éxito' });
});

// Endpoint para obtener estadísticas
app.get('/estadisticas', (req, res) => {
    res.json(estadisticas);
});

// Endpoint para generar el gráfico usando Python
app.get('/generar-grafico', (req, res) => {
    exec('python3 ./python/prova.py', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error al ejecutar el script: ${error.message}`);
            return res.status(500).json({ error: 'Error al generar el gráfico' });
        }
        if (stderr) {
            console.error(`Error: ${stderr}`);
            return res.status(500).json({ error: 'Error al generar el gráfico' });
        }

        // Verificar si se generó el gráfico
        const imagePath = path.join(__dirname, 'images', new Date().toLocaleDateString('en-GB'), 'output.png'); // Cambia esto según tu lógica de nombres
        if (fs.existsSync(imagePath)) {
            res.status(200).json({ message: 'Gráfico generado con éxito', imageUrl: `http://localhost:5000/images/${new Date().toLocaleDateString('en-GB')}/output.png` });
        } else {
            res.status(500).json({ error: 'El gráfico no se generó, verifica los datos' });
        }
    });
});


// Endpoint para acceder al gráfico generado
app.get('/images/18-10-2024/output.png', (req, res) => {
    const { date } = req.params;
    const imagePath = path.join(__dirname, 'images', date, 'output.png');
    
    res.sendFile(imagePath, (err) => {
        if (err) {
            console.error(err);
            res.status(404).send('Imagen no encontrada');
        }
    });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
