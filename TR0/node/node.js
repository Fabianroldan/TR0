const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let preguntas = [
    {
        "id": 1,
        "pregunta": "¿Cuál es la capital de España?",
        "opcions": [
            { "resposta": "Barcelona", "correcta": false },
            { "resposta": "Madrid", "correcta": true },
            { "resposta": "Valencia", "correcta": false },
            { "resposta": "Sevilla", "correcta": false }
        ],
        "imatge": "images/madrid.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 2,
        "pregunta": "¿Cuál es la capital de Francia?",
        "opcions": [
            { "resposta": "Lyon", "correcta": false },
            { "resposta": "Marsella", "correcta": false },
            { "resposta": "París", "correcta": true },
            { "resposta": "Niza", "correcta": false }
        ],
        "imatge": "/images/paris.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 3,
        "pregunta": "¿Cuál es la capital de Alemania?",
        "opcions": [
            { "resposta": "Berlín", "correcta": true },
            { "resposta": "Múnich", "correcta": false },
            { "resposta": "Fráncfort", "correcta": false },
            { "resposta": "Hamburgo", "correcta": false }
        ],
        "imatge": "/images/berlin.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 4,
        "pregunta": "¿Cuál es la capital de Italia?",
        "opcions": [
            { "resposta": "Milán", "correcta": false },
            { "resposta": "Roma", "correcta": true },
            { "resposta": "Nápoles", "correcta": false },
            { "resposta": "Turín", "correcta": false }
        ],
        "imatge": "/images/roma.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 5,
        "pregunta": "¿Cuál es la capital de Portugal?",
        "opcions": [
            { "resposta": "Oporto", "correcta": false },
            { "resposta": "Lisboa", "correcta": true },
            { "resposta": "Braga", "correcta": false },
            { "resposta": "Coímbra", "correcta": false }
        ],
        "imatge": "/images/lisboa.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 6,
        "pregunta": "¿Cuál es la capital de Inglaterra?",
        "opcions": [
            { "resposta": "Londres", "correcta": true },
            { "resposta": "Manchester", "correcta": false },
            { "resposta": "Liverpool", "correcta": false },
            { "resposta": "Birmingham", "correcta": false }
        ],
        "imatge": "/images/londres.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 7,
        "pregunta": "¿Cuál es la capital de Canadá?",
        "opcions": [
            { "resposta": "Toronto", "correcta": false },
            { "resposta": "Ottawa", "correcta": true },
            { "resposta": "Vancouver", "correcta": false },
            { "resposta": "Montreal", "correcta": false }
        ],
        "imatge": "/images/ottawa.jpg",
        "continente": "América del Norte",
        "dificultad": 2
    },
    {
        "id": 8,
        "pregunta": "¿Cuál es la capital de Australia?",
        "opcions": [
            { "resposta": "Sídney", "correcta": false },
            { "resposta": "Canberra", "correcta": true },
            { "resposta": "Melbourne", "correcta": false },
            { "resposta": "Perth", "correcta": false }
        ],
        "imatge": "/images/canberra.jpg",
        "continente": "Oceanía",
        "dificultad": 3
    },
    {
        "id": 9,
        "pregunta": "¿Cuál es la capital de Brasil?",
        "opcions": [
            { "resposta": "Río de Janeiro", "correcta": false },
            { "resposta": "Brasilia", "correcta": true },
            { "resposta": "São Paulo", "correcta": false },
            { "resposta": "Salvador", "correcta": false }
        ],
        "imatge": "/images/brasilia.jpg",
        "continente": "América del Sur",
        "dificultad": 2
    },
    {
        "id": 10,
        "pregunta": "¿Cuál es la capital de Argentina?",
        "opcions": [
            { "resposta": "Córdoba", "correcta": false },
            { "resposta": "Buenos Aires", "correcta": true },
            { "resposta": "Rosario", "correcta": false },
            { "resposta": "La Plata", "correcta": false }
        ],
        "imatge": "/images/buenos_aires.jpg",
        "continente": "América del Sur",
        "dificultad": 2
    },
    {
        "id": 11,
        "pregunta": "¿Cuál es la capital de Chile?",
        "opcions": [
            { "resposta": "Santiago", "correcta": true },
            { "resposta": "Valparaíso", "correcta": false },
            { "resposta": "Concepción", "correcta": false },
            { "resposta": "La Serena", "correcta": false }
        ],
        "imatge": "/images/santiago.jpg",
        "continente": "América del Sur",
        "dificultad": 2
    },
    {
        "id": 12,
        "pregunta": "¿Cuál es la capital de Colombia?",
        "opcions": [
            { "resposta": "Cartagena", "correcta": false },
            { "resposta": "Bogotá", "correcta": true },
            { "resposta": "Medellín", "correcta": false },
            { "resposta": "Cali", "correcta": false }
        ],
        "imatge": "/images/bogota.jpg",
        "continente": "América del Sur",
        "dificultad": 2
    },
    {
        "id": 13,
        "pregunta": "¿Cuál es la capital de Perú?",
        "opcions": [
            { "resposta": "Lima", "correcta": true },
            { "resposta": "Arequipa", "correcta": false },
            { "resposta": "Cusco", "correcta": false },
            { "resposta": "Trujillo", "correcta": false }
        ],
        "imatge": "/images/lima.jpg",
        "continente": "América del Sur",
        "dificultad": 2
    },
    {
        "id": 14,
        "pregunta": "¿Cuál es la capital de Venezuela?",
        "opcions": [
            { "resposta": "Caracas", "correcta": true },
            { "resposta": "Maracaibo", "correcta": false },
            { "resposta": "Valencia", "correcta": false },
            { "resposta": "Barquisimeto", "correcta": false }
        ],
        "imatge": "/images/caracas.jpg",
        "continente": "América del Sur",
        "dificultad": 2
    },
    {
        "id": 15,
        "pregunta": "¿Cuál es la capital de Uruguay?",
        "opcions": [
            { "resposta": "Montevideo", "correcta": true },
            { "resposta": "Salto", "correcta": false },
            { "resposta": "Paysandú", "correcta": false },
            { "resposta": "Tacuarembó", "correcta": false }
        ],
        "imatge": "/images/montevideo.jpg",
        "continente": "América del Sur",
        "dificultad": 2
    },
    {
        "id": 16,
        "pregunta": "¿Cuál es la capital de Paraguay?",
        "opcions": [
            { "resposta": "Asunción", "correcta": true },
            { "resposta": "Ciudad del Este", "correcta": false },
            { "resposta": "Encarnación", "correcta": false },
            { "resposta": "Luque", "correcta": false }
        ],
        "imatge": "/images/asuncion.jpg",
        "continente": "América del Sur",
        "dificultad": 2
    },
    {
        "id": 17,
        "pregunta": "¿Cuál es la capital de Bolivia?",
        "opcions": [
            { "resposta": "Sucre", "correcta": false },
            { "resposta": "La Paz", "correcta": true },
            { "resposta": "Cochabamba", "correcta": false },
            { "resposta": "Santa Cruz de la Sierra", "correcta": false }
        ],
        "imatge": "/images/la_paz.jpg",
        "continente": "América del Sur",
        "dificultad": 2
    },
    {
        "id": 18,
        "pregunta": "¿Cuál es la capital de Ecuador?",
        "opcions": [
            { "resposta": "Guayaquil", "correcta": false },
            { "resposta": "Quito", "correcta": true },
            { "resposta": "Cuenca", "correcta": false },
            { "resposta": "Manta", "correcta": false }
        ],
        "imatge": "/images/quito.jpg",
        "continente": "América del Sur",
        "dificultad": 2
    },
    {
        "id": 19,
        "pregunta": "¿Cuál es la capital de Grecia?",
        "opcions": [
            { "resposta": "Salónica", "correcta": false },
            { "resposta": "Atenas", "correcta": true },
            { "resposta": "Patras", "correcta": false },
            { "resposta": "Heraclión", "correcta": false }
        ],
        "imatge": "/images/atenas.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 20,
        "pregunta": "¿Cuál es la capital de Suecia?",
        "opcions": [
            { "resposta": "Gotemburgo", "correcta": false },
            { "resposta": "Estocolmo", "correcta": true },
            { "resposta": "Malmö", "correcta": false },
            { "resposta": "Upsala", "correcta": false }
        ],
        "imatge": "/images/estocolmo.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 21,
        "pregunta": "¿Cuál es la capital de Noruega?",
        "opcions": [
            { "resposta": "Bergen", "correcta": false },
            { "resposta": "Oslo", "correcta": true },
            { "resposta": "Stavanger", "correcta": false },
            { "resposta": "Trondheim", "correcta": false }
        ],
        "imatge": "/images/oslo.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 22,
        "pregunta": "¿Cuál es la capital de Finlandia?",
        "opcions": [
            { "resposta": "Tampere", "correcta": false },
            { "resposta": "Helsinki", "correcta": true },
            { "resposta": "Oulu", "correcta": false },
            { "resposta": "Turku", "correcta": false }
        ],
        "imatge": "/images/helsinki.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 23,
        "pregunta": "¿Cuál es la capital de Dinamarca?",
        "opcions": [
            { "resposta": "Aarhus", "correcta": false },
            { "resposta": "Copenhague", "correcta": true },
            { "resposta": "Odense", "correcta": false },
            { "resposta": "Aalborg", "correcta": false }
        ],
        "imatge": "/images/copenhague.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 24,
        "pregunta": "¿Cuál es la capital de Suiza?",
        "opcions": [
            { "resposta": "Zúrich", "correcta": false },
            { "resposta": "Berna", "correcta": true },
            { "resposta": "Ginebra", "correcta": false },
            { "resposta": "Basilea", "correcta": false }
        ],
        "imatge": "/images/berna.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 25,
        "pregunta": "¿Cuál es la capital de Austria?",
        "opcions": [
            { "resposta": "Salzburgo", "correcta": false },
            { "resposta": "Viena", "correcta": true },
            { "resposta": "Innsbruck", "correcta": false },
            { "resposta": "Graz", "correcta": false }
        ],
        "imatge": "/images/viena.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 26,
        "pregunta": "¿Cuál es la capital de Bélgica?",
        "opcions": [
            { "resposta": "Brujas", "correcta": false },
            { "resposta": "Bruselas", "correcta": true },
            { "resposta": "Amberes", "correcta": false },
            { "resposta": "Gante", "correcta": false }
        ],
        "imatge": "/images/bruselas.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 27,
        "pregunta": "¿Cuál es la capital de Países Bajos?",
        "opcions": [
            { "resposta": "Róterdam", "correcta": false },
            { "resposta": "Ámsterdam", "correcta": true },
            { "resposta": "La Haya", "correcta": false },
            { "resposta": "Eindhoven", "correcta": false }
        ],
        "imatge": "/images/amsterdam.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 28,
        "pregunta": "¿Cuál es la capital de Irlanda?",
        "opcions": [
            { "resposta": "Cork", "correcta": false },
            { "resposta": "Dublín", "correcta": true },
            { "resposta": "Galway", "correcta": false },
            { "resposta": "Limerick", "correcta": false }
        ],
        "imatge": "/images/dublin.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 29,
        "pregunta": "¿Cuál es la capital de Polonia?",
        "opcions": [
            { "resposta": "Cracovia", "correcta": false },
            { "resposta": "Varsovia", "correcta": true },
            { "resposta": "Gdansk", "correcta": false },
            { "resposta": "Poznań", "correcta": false }
        ],
        "imatge": "/images/varsovia.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 30,
        "pregunta": "¿Cuál es la capital de Hungría?",
        "opcions": [
            { "resposta": "Debrecen", "correcta": false },
            { "resposta": "Budapest", "correcta": true },
            { "resposta": "Szeged", "correcta": false },
            { "resposta": "Miskolc", "correcta": false }
        ],
        "imatge": "/images/budapest.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 31,
        "pregunta": "¿Cuál es la capital de República Checa?",
        "opcions": [
            { "resposta": "Brno", "correcta": false },
            { "resposta": "Praga", "correcta": true },
            { "resposta": "Ostrava", "correcta": false },
            { "resposta": "Pilsen", "correcta": false }
        ],
        "imatge": "/images/praga.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 32,
        "pregunta": "¿Cuál es la capital de Eslovaquia?",
        "opcions": [
            { "resposta": "Kosice", "correcta": false },
            { "resposta": "Bratislava", "correcta": true },
            { "resposta": "Nitra", "correcta": false },
            { "resposta": "Trnava", "correcta": false }
        ],
        "imatge": "/images/bratislava.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 33,
        "pregunta": "¿Cuál es la capital de Croacia?",
        "opcions": [
            { "resposta": "Split", "correcta": false },
            { "resposta": "Zagreb", "correcta": true },
            { "resposta": "Dubrovnik", "correcta": false },
            { "resposta": "Rijeka", "correcta": false }
        ],
        "imatge": "/images/zagreb.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 34,
        "pregunta": "¿Cuál es la capital de Eslovenia?",
        "opcions": [
            { "resposta": "Maribor", "correcta": false },
            { "resposta": "Liubliana", "correcta": true },
            { "resposta": "Koper", "correcta": false },
            { "resposta": "Celje", "correcta": false }
        ],
        "imatge": "/images/liubliana.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 35,
        "pregunta": "¿Cuál es la capital de Rumanía?",
        "opcions": [
            { "resposta": "Cluj-Napoca", "correcta": false },
            { "resposta": "Bucarest", "correcta": true },
            { "resposta": "Timișoara", "correcta": false },
            { "resposta": "Iași", "correcta": false }
        ],
        "imatge": "/images/bucarest.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 36,
        "pregunta": "¿Cuál es la capital de Bulgaria?",
        "opcions": [
            { "resposta": "Varna", "correcta": false },
            { "resposta": "Sofía", "correcta": true },
            { "resposta": "Plovdiv", "correcta": false },
            { "resposta": "Burgas", "correcta": false }
        ],
        "imatge": "/images/sofia.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 37,
        "pregunta": "¿Cuál es la capital de Serbia?",
        "opcions": [
            { "resposta": "Novi Sad", "correcta": false },
            { "resposta": "Belgrado", "correcta": true },
            { "resposta": "Niš", "correcta": false },
            { "resposta": "Kragujevac", "correcta": false }
        ],
        "imatge": "/images/belgrado.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 38,
        "pregunta": "¿Cuál es la capital de Bosnia y Herzegovina?",
        "opcions": [
            { "resposta": "Mostar", "correcta": false },
            { "resposta": "Sarajevo", "correcta": true },
            { "resposta": "Banja Luka", "correcta": false },
            { "resposta": "Tuzla", "correcta": false }
        ],
        "imatge": "/images/sarajevo.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 39,
        "pregunta": "¿Cuál es la capital de Macedonia del Norte?",
        "opcions": [
            { "resposta": "Ohrid", "correcta": false },
            { "resposta": "Skopie", "correcta": true },
            { "resposta": "Bitola", "correcta": false },
            { "resposta": "Tetovo", "correcta": false }
        ],
        "imatge": "/images/skopie.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 40,
        "pregunta": "¿Cuál es la capital de Albania?",
        "opcions": [
            { "resposta": "Durres", "correcta": false },
            { "resposta": "Tirana", "correcta": true },
            { "resposta": "Shkodra", "correcta": false },
            { "resposta": "Vlora", "correcta": false }
        ],
        "imatge": "/images/tirana.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 41,
        "pregunta": "¿Cuál es la capital de Montenegro?",
        "opcions": [
            { "resposta": "Bar", "correcta": false },
            { "resposta": "Podgorica", "correcta": true },
            { "resposta": "Kotor", "correcta": false },
            { "resposta": "Herceg Novi", "correcta": false }
        ],
        "imatge": "/images/podgorica.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 42,
        "pregunta": "¿Cuál es la capital de Kosovo?",
        "opcions": [
            { "resposta": "Prizren", "correcta": false },
            { "resposta": "Pristina", "correcta": true },
            { "resposta": "Gjakova", "correcta": false },
            { "resposta": "Peja", "correcta": false }
        ],
        "imatge": "/images/pristina.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 43,
        "pregunta": "¿Cuál es la capital de Ucrania?",
        "opcions": [
            { "resposta": "Odesa", "correcta": false },
            { "resposta": "Kiev", "correcta": true },
            { "resposta": "Leópolis", "correcta": false },
            { "resposta": "Járkov", "correcta": false }
        ],
        "imatge": "/images/kiev.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 44,
        "pregunta": "¿Cuál es la capital de Bielorrusia?",
        "opcions": [
            { "resposta": "Gomel", "correcta": false },
            { "resposta": "Minsk", "correcta": true },
            { "resposta": "Brest", "correcta": false },
            { "resposta": "Vítebsk", "correcta": false }
        ],
        "imatge": "/images/minsk.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 45,
        "pregunta": "¿Cuál es la capital de Letonia?",
        "opcions": [
            { "resposta": "Daugavpils", "correcta": false },
            { "resposta": "Riga", "correcta": true },
            { "resposta": "Liepaja", "correcta": false },
            { "resposta": "Jelgava", "correcta": false }
        ],
        "imatge": "/images/riga.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 46,
        "pregunta": "¿Cuál es la capital de Lituania?",
        "opcions": [
            { "resposta": "Kaunas", "correcta": false },
            { "resposta": "Vilna", "correcta": true },
            { "resposta": "Klaipeda", "correcta": false },
            { "resposta": "Šiauliai", "correcta": false }
        ],
        "imatge": "/images/vilna.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 47,
        "pregunta": "¿Cuál es la capital de Estonia?",
        "opcions": [
            { "resposta": "Tartu", "correcta": false },
            { "resposta": "Tallin", "correcta": true },
            { "resposta": "Narva", "correcta": false },
            { "resposta": "Pärnu", "correcta": false }
        ],
        "imatge": "/images/tallin.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 48,
        "pregunta": "¿Cuál es la capital de Moldavia?",
        "opcions": [
            { "resposta": "Tiráspol", "correcta": false },
            { "resposta": "Chisináu", "correcta": true },
            { "resposta": "Bălți", "correcta": false },
            { "resposta": "Cahul", "correcta": false }
        ],
        "imatge": "/images/chisinau.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 49,
        "pregunta": "¿Cuál es la capital de Armenia?",
        "opcions": [
            { "resposta": "Gyumri", "correcta": false },
            { "resposta": "Ereván", "correcta": true },
            { "resposta": "Vanadzor", "correcta": false },
            { "resposta": "Ejmiatsin", "correcta": false }
        ],
        "imatge": "/images/erevan.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 50,
        "pregunta": "¿Cuál es la capital de Georgia?",
        "opcions": [
            { "resposta": "Batumi", "correcta": false },
            { "resposta": "Tiflis", "correcta": true },
            { "resposta": "Kutaisi", "correcta": false },
            { "resposta": "Rustavi", "correcta": false }
        ],
        "imatge": "/images/tiflis.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 51,
        "pregunta": "¿Cuál es la capital de Azerbaiyán?",
        "opcions": [
            { "resposta": "Ganja", "correcta": false },
            { "resposta": "Bakú", "correcta": true },
            { "resposta": "Sumqayit", "correcta": false },
            { "resposta": "Naxçıvan", "correcta": false }
        ],
        "imatge": "/images/baku.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 52,
        "pregunta": "¿Cuál es la capital de Kazajistán?",
        "opcions": [
            { "resposta": "Almaty", "correcta": false },
            { "resposta": "Astana", "correcta": true },
            { "resposta": "Shymkent", "correcta": false },
            { "resposta": "Karaganda", "correcta": false }
        ],
        "imatge": "/images/astana.jpg",
        "continente": "Asia",
        "dificultad": 2
    },
    {
        "id": 53,
        "pregunta": "¿Cuál es la capital de Uzbekistán?",
        "opcions": [
            { "resposta": "Samarkanda", "correcta": false },
            { "resposta": "Tashkent", "correcta": true },
            { "resposta": "Bujará", "correcta": false },
            { "resposta": "Andiján", "correcta": false }
        ],
        "imatge": "/images/tashkent.jpg",
        "continente": "Asia",
        "dificultad": 2
    },
    {
        "id": 54,
        "pregunta": "¿Cuál es la capital de Turkmenistán?",
        "opcions": [
            { "resposta": "Mary", "correcta": false },
            { "resposta": "Asjabad", "correcta": true },
            { "resposta": "Dashoguz", "correcta": false },
            { "resposta": "Turkmenabat", "correcta": false }
        ],
        "imatge": "/images/ashgabat.jpg",
        "continente": "Asia",
        "dificultad": 2
    },
    {
        "id": 55,
        "pregunta": "¿Cuál es la capital de Kirguistán?",
        "opcions": [
            { "resposta": "Osh", "correcta": false },
            { "resposta": "Biskek", "correcta": true },
            { "resposta": "Jalal-Abad", "correcta": false },
            { "resposta": "Karakol", "correcta": false }
        ],
        "imatge": "/images/biskek.jpg",
        "continente": "Asia",
        "dificultad": 2
    },
    {
        "id": 56,
        "pregunta": "¿Cuál es la capital de Tayikistán?",
        "opcions": [
            { "resposta": "Khujand", "correcta": false },
            { "resposta": "Dusambé", "correcta": true },
            { "resposta": "Kulob", "correcta": false },
            { "resposta": "Istaravshan", "correcta": false }
        ],
        "imatge": "/images/dusambe.jpg",
        "continente": "Asia",
        "dificultad": 2
    },
    {
        "id": 57,
        "pregunta": "¿Cuál es la capital de Afganistán?",
        "opcions": [
            { "resposta": "Kandahar", "correcta": false },
            { "resposta": "Kabul", "correcta": true },
            { "resposta": "Herat", "correcta": false },
            { "resposta": "Mazār-e Šarīf", "correcta": false }
        ],
        "imatge": "/images/kabul.jpg",
        "continente": "Asia",
        "dificultad": 2
    },
    {
        "id": 58,
        "pregunta": "¿Cuál es la capital de Pakistán?",
        "opcions": [
            { "resposta": "Karachi", "correcta": false },
            { "resposta": "Islamabad", "correcta": true },
            { "resposta": "Lahore", "correcta": false },
            { "resposta": "Faisalabad", "correcta": false }
        ],
        "imatge": "/images/islamabad.jpg",
        "continente": "Asia",
        "dificultad": 2
    },
    {
        "id": 59,
        "pregunta": "¿Cuál es la capital de Irán?",
        "opcions": [
            { "resposta": "Shiraz", "correcta": false },
            { "resposta": "Teherán", "correcta": true },
            { "resposta": "Isfahán", "correcta": false },
            { "resposta": "Mashhad", "correcta": false }
        ],
        "imatge": "/images/teheran.jpg",
        "continente": "Asia",
        "dificultad": 2
    },
    {
        "id": 69,
        "pregunta": "¿Cuál es la capital de Qatar?",
        "opcions": [
            { "resposta": "Al Khor", "correcta": false },
            { "resposta": "Doha", "correcta": true },
            { "resposta": "Al Wakrah", "correcta": false },
            { "resposta": "Umm Salal", "correcta": false }
        ],
        "imatge": "/images/doha.jpg",
        "continente": "Asia",
        "dificultad": 2
    },
    {
        "id": 70,
        "pregunta": "¿Cuál es la capital de China?",
        "opcions": [
            { "resposta": "Shanghái", "correcta": false },
            { "resposta": "Pekín", "correcta": true },
            { "resposta": "Cantón", "correcta": false },
            { "resposta": "Shenzhen", "correcta": false }
        ],
        "imatge": "/images/pekin.jpg",
        "continente": "Asia",
        "dificultad": 1
    },
    {
        "id": 71,
        "pregunta": "¿Cuál es la capital de Kuwait?",
        "opcions": [
            { "resposta": "Salmiya", "correcta": false },
            { "resposta": "Kuwait City", "correcta": true },
            { "resposta": "Hawalli", "correcta": false },
            { "resposta": "Jahra", "correcta": false }
        ],
        "imatge": "/images/kuwait_city.jpg",
        "continente": "Asia",
        "dificultad": 2
    },
    {
        "id": 72,
        "pregunta": "¿Cuál es la capital de Chipre?",
        "opcions": [
            { "resposta": "Limasol", "correcta": false },
            { "resposta": "Nicosia", "correcta": true },
            { "resposta": "Lárnaca", "correcta": false },
            { "resposta": "Pafos", "correcta": false }
        ],
        "imatge": "/images/nicosia.jpg",
        "continente": "Asia",
        "dificultad": 2
    },
    {
        "id": 73,
        "pregunta": "¿Cuál es la capital de Turquía?",
        "opcions": [
            { "resposta": "Estambul", "correcta": false },
            { "resposta": "Ankara", "correcta": true },
            { "resposta": "Izmir", "correcta": false },
            { "resposta": "Antalya", "correcta": false }
        ],
        "imatge": "/images/ankara.jpg",
        "continente": "Asia",
        "dificultad": 2
    },
    {
        "id": 74,
        "pregunta": "¿Cuál es la capital de Corea del Norte?",
        "opcions": [
            { "resposta": "Pionyang", "correcta": true },
            { "resposta": "Nampo", "correcta": false },
            { "resposta": "Sinuiju", "correcta": false },
            { "resposta": "Wonsan", "correcta": false }
        ],
        "imatge": "/images/pyongyang.jpg",
        "continente": "Asia",
        "dificultad": 2
    },
    {
        "id": 75,
        "pregunta": "¿Cuál es la capital de Egipto?",
        "opcions": [
            { "resposta": "Alejandría", "correcta": false },
            { "resposta": "El Cairo", "correcta": true },
            { "resposta": "Giza", "correcta": false },
            { "resposta": "Luxor", "correcta": false }
        ],
        "imatge": "/images/cairo.jpg",
        "continente": "África",
        "dificultad": 2
    },
    {
        "id": 76,
        "pregunta": "¿Cuál es la capital de Libia?",
        "opcions": [
            { "resposta": "Bengasi", "correcta": false },
            { "resposta": "Trípoli", "correcta": true },
            { "resposta": "Misurata", "correcta": false },
            { "resposta": "Sabha", "correcta": false }
        ],
        "imatge": "/images/tripoli.jpg",
        "continente": "África",
        "dificultad": 2
    },
    {
        "id": 77,
        "pregunta": "¿Cuál es la capital de Corea del Sur?",
        "opcions": [
            { "resposta": "Seúl", "correcta": true },
            { "resposta": "Busan", "correcta": false },
            { "resposta": "Incheon", "correcta": false },
            { "resposta": "Suwon", "correcta": false }
        ],
        "imatge": "/images/seul.jpg",
        "continente": "Asia",
        "dificultad": 1
    },
    {
        "id": 78,
        "pregunta": "¿Cuál es la capital de Vietnam?",
        "opcions": [
            { "resposta": "Hanoi", "correcta": true },
            { "resposta": "Ho Chi Minh", "correcta": false },
            { "resposta": "Da Nang", "correcta": false },
            { "resposta": "Nha Trang", "correcta": false }
        ],
        "imatge": "/images/hanoi.jpg",
        "continente": "Asia",
        "dificultad": 1
    },
    {
        "id": 79,
        "pregunta": "¿Cuál es la capital de Tailandia?",
        "opcions": [
            { "resposta": "Bangkok", "correcta": true },
            { "resposta": "Chiang Mai", "correcta": false },
            { "resposta": "Pattaya", "correcta": false },
            { "resposta": "Phuket", "correcta": false }
        ],
        "imatge": "/images/bangkok.jpg",
        "continente": "Asia",
        "dificultad": 1
    },
    {
        "id": 80,
        "pregunta": "¿Cuál es la capital de Rusia?",
        "opcions": [
            { "resposta": "Moscú", "correcta": true },
            { "resposta": "San Petersburgo", "correcta": false },
            { "resposta": "Novosibirsk", "correcta": false },
            { "resposta": "Ekaterimburgo", "correcta": false }
        ],
        "imatge": "/images/moscu.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 81,
        "pregunta": "¿Cuál es la capital de Islandia?",
        "opcions": [
            { "resposta": "Reikiavik", "correcta": true },
            { "resposta": "Akureyri", "correcta": false },
            { "resposta": "Hafnarfjörður", "correcta": false },
            { "resposta": "Keflavík", "correcta": false }
        ],
        "imatge": "/images/reikiavik.jpg",
        "continente": "Europa",
        "dificultad": 1
    },
    {
        "id": 82,
        "pregunta": "¿Cuál es la capital de Kenia?",
        "opcions": [
            { "resposta": "Mombasa", "correcta": false },
            { "resposta": "Nairobi", "correcta": true },
            { "resposta": "Nakuru", "correcta": false },
            { "resposta": "Kisumu", "correcta": false }
        ],
        "imatge": "/images/nairobi.jpg",
        "continente": "África",
        "dificultad": 1
    },
    {
        "id": 83,
        "pregunta": "¿Cuál es la capital de Indonesia?",
        "opcions": [
            { "resposta": "Yakarta", "correcta": true },
            { "resposta": "Surabaya", "correcta": false },
            { "resposta": "Bandung", "correcta": false },
            { "resposta": "Denpasar", "correcta": false }
        ],
        "imatge": "/images/yakarta.jpg",
        "continente": "Asia",
        "dificultad": 1
    },
    {
        "id": 84,
        "pregunta": "¿Cuál es la capital de Malasia?",
        "opcions": [
            { "resposta": "Kuala Lumpur", "correcta": true },
            { "resposta": "George Town", "correcta": false },
            { "resposta": "Johor Bahru", "correcta": false },
            { "resposta": "Kota Bharu", "correcta": false }
        ],
        "imatge": "/images/kuala_lumpur.jpg",
        "continente": "Asia",
        "dificultad": 2
    },
    {
        "id": 85,
        "pregunta": "¿Cuál es la capital de Taiwán?",
        "opcions": [
            { "resposta": "Taipéi", "correcta": true },
            { "resposta": "Kaohsiung", "correcta": false },
            { "resposta": "Tainan", "correcta": false },
            { "resposta": "Taichung", "correcta": false }
        ],
        "imatge": "/images/taipei.jpg",
        "continente": "Asia",
        "dificultad": 2
    },
    {
        "id": 86,
        "pregunta": "¿Cuál es la capital de Mongolia?",
        "opcions": [
            { "resposta": "Ulán Bator", "correcta": true },
            { "resposta": "Erdenet", "correcta": false },
            { "resposta": "Darkhan", "correcta": false },
            { "resposta": "Ölgii", "correcta": false }
        ],
        "imatge": "/images/ulan_bator.jpg",
        "continente": "Asia",
        "dificultad": 2
    },
    {
        "id": 87,
        "pregunta": "¿Cuál es la capital de Zambia?",
        "opcions": [
            { "resposta": "Ndola", "correcta": false },
            { "resposta": "Lusaka", "correcta": true },
            { "resposta": "Kitwe", "correcta": false },
            { "resposta": "Livingstone", "correcta": false }
        ],
        "imatge": "/images/lusaka.jpg",
        "continente": "África",
        "dificultad": 1
    },
    {
        "id": 88,
        "pregunta": "¿Cuál es la capital de Singapur?",
        "opcions": [
            { "resposta": "Singapur", "correcta": true },
            { "resposta": "Sentosa", "correcta": false },
            { "resposta": "Jurong", "correcta": false },
            { "resposta": "Punggol", "correcta": false }
        ],
        "imatge": "/images/singapur.jpg",
        "continente": "Asia",
        "dificultad": 2
    },
    {
        "id": 89,
        "pregunta": "¿Cuál es la capital de Botsuana?",
        "opcions": [
            { "resposta": "Francistown", "correcta": false },
            { "resposta": "Gaborone", "correcta": true },
            { "resposta": "Maun", "correcta": false },
            { "resposta": "Kasane", "correcta": false }
        ],
        "imatge": "/images/gaborone.jpg",
        "continente": "África",
        "dificultad": 1
    },
    {
        "id": 90,
        "pregunta": "¿Cuál es la capital de Nueva Zelanda?",
        "opcions": [
            { "resposta": "Wellington", "correcta": true },
            { "resposta": "Auckland", "correcta": false },
            { "resposta": "Christchurch", "correcta": false },
            { "resposta": "Hamilton", "correcta": false }
        ],
        "imatge": "/images/wellington.jpg",
        "continente": "Oceanía",
        "dificultad": 2
    },
    {
        "id": 91,
        "pregunta": "¿Cuál es la capital de Angola?",
        "opcions": [
            { "resposta": "Lobito", "correcta": false },
            { "resposta": "Luanda", "correcta": true },
            { "resposta": "Huambo", "correcta": false },
            { "resposta": "Lubango", "correcta": false }
        ],
        "imatge": "/images/luanda.jpg",
        "continente": "África",
        "dificultad": 1
    },
    {
        "id": 92,
        "pregunta": "¿Cuál es la capital de Mozambique?",
        "opcions": [
            { "resposta": "Beira", "correcta": false },
            { "resposta": "Maputo", "correcta": true },
            { "resposta": "Nampula", "correcta": false },
            { "resposta": "Tete", "correcta": false }
        ],
        "imatge": "/images/maputo.jpg",
        "continente": "África",
        "dificultad": 1
    },
    {
        "id": 93,
        "pregunta": "¿Cuál es la capital de Madagascar?",
        "opcions": [
            { "resposta": "Toamasina", "correcta": false },
            { "resposta": "Antananarivo", "correcta": true },
            { "resposta": "Mahajanga", "correcta": false },
            { "resposta": "Fianarantsoa", "correcta": false }
        ],
        "imatge": "/images/antantanarivo.jpg",
        "continente": "África",
        "dificultad": 1
    },
    {
        "id": 94,
        "pregunta": "¿Cuál es la capital de Sudáfrica?",
        "opcions": [
            { "resposta": "Johannesburgo", "correcta": false },
            { "resposta": "Pretoria", "correcta": true },
            { "resposta": "Ciudad del Cabo", "correcta": false },
            { "resposta": "Durban", "correcta": false }
        ],
        "imatge": "/images/pretoria.jpg",
        "continente": "África",
        "dificultad": 2
    },
    {
        "id": 95,
        "pregunta": "¿Cuál es la capital de Marruecos?",
        "opcions": [
            { "resposta": "Rabat", "correcta": true },
            { "resposta": "Casablanca", "correcta": false },
            { "resposta": "Marrakech", "correcta": false },
            { "resposta": "Fez", "correcta": false }
        ],
        "imatge": "/images/rabat.jpg",
        "continente": "África",
        "dificultad": 1
    },
    {
        "id": 96,
        "pregunta": "¿Cuál es la capital de Argelia?",
        "opcions": [
            { "resposta": "Argel", "correcta": true },
            { "resposta": "Orán", "correcta": false },
            { "resposta": "Constantina", "correcta": false },
            { "resposta": "Annaba", "correcta": false }
        ],
        "imatge": "/images/argel.jpg",
        "continente": "África",
        "dificultad": 1
    },
    {
        "id": 97,
        "pregunta": "¿Cuál es la capital de Túnez?",
        "opcions": [
            { "resposta": "Túnez", "correcta": true },
            { "resposta": "Sfax", "correcta": false },
            { "resposta": "Susa", "correcta": false },
            { "resposta": "Kairuán", "correcta": false }
        ],
        "imatge": "/images/tunez.jpg",
        "continente": "África",
        "dificultad": 1
    },
    {
        "id": 98,
        "pregunta": "¿Cuál es la capital de Senegal?",
        "opcions": [
            { "resposta": "Dakar", "correcta": true },
            { "resposta": "Saint-Louis", "correcta": false },
            { "resposta": "Thiès", "correcta": false },
            { "resposta": "Ziguinchor", "correcta": false }
        ],
        "imatge": "/images/dakar.jpg",
        "continente": "África",
        "dificultad": 1
    },
    {
        "id": 99,
        "pregunta": "¿Cuál es la capital de Ghana?",
        "opcions": [
            { "resposta": "Acra", "correcta": true },
            { "resposta": "Kumasi", "correcta": false },
            { "resposta": "Tamale", "correcta": false },
            { "resposta": "Takoradi", "correcta": false }
        ],
        "imatge": "/images/acra.jpg",
        "continente": "África",
        "dificultad": 2
    },
    {
        "id": 100,
        "pregunta": "¿Cuál es la capital de Costa de Marfil?",
        "opcions": [
            { "resposta": "Yamusukro", "correcta": true },
            { "resposta": "Abiyán", "correcta": false },
            { "resposta": "Bouaké", "correcta": false },
            { "resposta": "San Pedro", "correcta": false }
        ],
        "imatge": "/images/yamusukro.jpg",
        "continente": "África",
        "dificultad": 2
    },
    {
        "id": 101,
        "pregunta": "¿Cuál es la capital de Estados Unidos?",
        "opcions": [
            { "resposta": "Washington, D.C.", "correcta": true },
            { "resposta": "Nueva York", "correcta": false },
            { "resposta": "Los Ángeles", "correcta": false },
            { "resposta": "Chicago", "correcta": false }
        ],
        "imatge": "/images/washington.jpg",
        "continente": "América del Norte",
        "dificultad": 1
    },
    {
        "id": 102,
        "pregunta": "¿Cuál es la capital de México?",
        "opcions": [
            { "resposta": "Ciudad de México", "correcta": true },
            { "resposta": "Guadalajara", "correcta": false },
            { "resposta": "Monterrey", "correcta": false },
            { "resposta": "Cancún", "correcta": false }
        ],
        "imatge": "/images/cdmx.jpg",
        "continente": "América del Norte",
        "dificultad": 1
    },
    {
        "id": 103,
        "pregunta": "¿Cuál es la capital de Andorra?",
        "opcions": [
            { "resposta": "Andorra la Vieja", "correcta": true },
            { "resposta": "Encamp", "correcta": false },
            { "resposta": "La Massana", "correcta": false },
            { "resposta": "Ordino", "correcta": false }
        ],
        "imatge": "/images/andorra.jpg",
        "continente": "Europa",
        "dificultad": 3
    },
    {
        "id": 104,
        "pregunta": "¿Cuál es la capital de Nigeria?",
        "opcions": [
            { "resposta": "Abuja", "correcta": true },
            { "resposta": "Lagos", "correcta": false },
            { "resposta": "Kano", "correcta": false },
            { "resposta": "Ibadan", "correcta": false }
        ],
        "imatge": "/images/abuja.jpg",
        "continente": "África",
        "dificultad": 2
    },
    {
        "id": 105,
        "pregunta": "¿Cuál es la capital de la República Democrática del Congo?",
        "opcions": [
            { "resposta": "Kinshasa", "correcta": true },
            { "resposta": "Lubumbashi", "correcta": false },
            { "resposta": "Goma", "correcta": false },
            { "resposta": "Mbuji-Mayi", "correcta": false }
        ],
        "imatge": "/images/kinshasa.jpg",
        "continente": "África",
        "dificultad": 2
    },
    {
        "id": 106,
        "pregunta": "¿Cuál es la capital de Cuba?",
        "opcions": [
            { "resposta": "La Habana", "correcta": true },
            { "resposta": "Santiago de Cuba", "correcta": false },
            { "resposta": "Camagüey", "correcta": false },
            { "resposta": "Holguín", "correcta": false }
        ],
        "imatge": "/images/lahabana.jpg",
        "continente": "América del Norte",
        "dificultad": 1
    },
    {
        "id": 107,
        "pregunta": "¿Cuál es la capital de Guatemala?",
        "opcions": [
            { "resposta": "Ciudad de Guatemala", "correcta": true },
            { "resposta": "Antigua Guatemala", "correcta": false },
            { "resposta": "Quetzaltenango", "correcta": false },
            { "resposta": "Escuintla", "correcta": false }
        ],
        "imatge": "/images/guatemala.jpg",
        "continente": "América Central",
        "dificultad": 2
    },
    {
        "id": 108,
        "pregunta": "¿Cuál es la capital de Honduras?",
        "opcions": [
            { "resposta": "Tegucigalpa", "correcta": true },
            { "resposta": "San Pedro Sula", "correcta": false },
            { "resposta": "La Ceiba", "correcta": false },
            { "resposta": "Comayagua", "correcta": false }
        ],
        "imatge": "/images/tegucigalpa.jpg",
        "continente": "América Central",
        "dificultad": 2
    },
    {
        "id": 109,
        "pregunta": "¿Cuál es la capital de El Salvador?",
        "opcions": [
            { "resposta": "San Salvador", "correcta": true },
            { "resposta": "Santa Ana", "correcta": false },
            { "resposta": "San Miguel", "correcta": false },
            { "resposta": "Sonsonate", "correcta": false }
        ],
        "imatge": "/images/sansalvador.jpg",
        "continente": "América Central",
        "dificultad": 2
    },
    {
        "id": 110,
        "pregunta": "¿Cuál es la capital de Costa Rica?",
        "opcions": [
            { "resposta": "San José", "correcta": true },
            { "resposta": "Alajuela", "correcta": false },
            { "resposta": "Cartago", "correcta": false },
            { "resposta": "Heredia", "correcta": false }
        ],
        "imatge": "/images/sanjose.jpg",
        "continente": "América Central",
        "dificultad": 2
    },
    {
        "id": 111,
        "pregunta": "¿Cuál es la capital de Panamá?",
        "opcions": [
            { "resposta": "Ciudad de Panamá", "correcta": true },
            { "resposta": "Colón", "correcta": false },
            { "resposta": "David", "correcta": false },
            { "resposta": "Santiago", "correcta": false }
        ],
        "imatge": "/images/panama.jpg",
        "continente": "América Central",
        "dificultad": 2
    },
    {
        "id": 112,
        "pregunta": "¿Cuál es la capital de la República Dominicana?",
        "opcions": [
            { "resposta": "Santo Domingo", "correcta": true },
            { "resposta": "Santiago de los Caballeros", "correcta": false },
            { "resposta": "La Vega", "correcta": false },
            { "resposta": "San Pedro de Macorís", "correcta": false }
        ],
        "imatge": "/images/santodomingo.jpg",
        "continente": "América Central",
        "dificultad": 1
    },
    {
        "id": 113,
        "pregunta": "¿Cuál es la capital de Bangladesh?",
        "opcions": [
            { "resposta": "Daca", "correcta": true },
            { "resposta": "Chittagong", "correcta": false },
            { "resposta": "Khulna", "correcta": false },
            { "resposta": "Rajshahi", "correcta": false }
        ],
        "imatge": "/images/daca.jpg",
        "continente": "Asia",
        "dificultad": 1
    },
    {
        "id": 114,
        "pregunta": "¿Cuál es la capital de Laos?",
        "opcions": [
            { "resposta": "Vientián", "correcta": true },
            { "resposta": "Luang Prabang", "correcta": false },
            { "resposta": "Pakse", "correcta": false },
            { "resposta": "Savannakhet", "correcta": false }
        ],
        "imatge": "/images/vientian.jpg",
        "continente": "Asia",
        "dificultad": 1
    },
    {
        "id": 115,
        "pregunta": "¿Cuál es la capital de Filipinas?",
        "opcions": [
            { "resposta": "Manila", "correcta": true },
            { "resposta": "Cebú", "correcta": false },
            { "resposta": "Dávao", "correcta": false },
            { "resposta": "Quezón", "correcta": false }
        ],
        "imatge": "/images/manila.jpg",
        "continente": "Asia",
        "dificultad": 1
    },
    {
        "id": 116,
        "pregunta": "¿Cuál es la capital de Brunei?",
        "opcions": [
            { "resposta": "Bandar Seri Begawan", "correcta": true },
            { "resposta": "Kuala Belait", "correcta": false },
            { "resposta": "Tutong", "correcta": false },
            { "resposta": "Seria", "correcta": false }
        ],
        "imatge": "/images/brunei.jpg",
        "continente": "Asia",
        "dificultad": 1
    },
    {
        "id": 117,
        "pregunta": "¿Cuál es la capital de Nepal?",
        "opcions": [
            { "resposta": "Katmandú", "correcta": true },
            { "resposta": "Pokhara", "correcta": false },
            { "resposta": "Lalitpur", "correcta": false },
            { "resposta": "Biratnagar", "correcta": false }
        ],
        "imatge": "/images/katmandu.jpg",
        "continente": "Asia",
        "dificultad": 1
    },
    {
        "id": 118,
        "pregunta": "¿Cuál es la capital de Bután?",
        "opcions": [
            { "resposta": "Thimphu", "correcta": true },
            { "resposta": "Paro", "correcta": false },
            { "resposta": "Punakha", "correcta": false },
            { "resposta": "Trongsa", "correcta": false }
        ],
        "imatge": "/images/thimphu.jpg",
        "continente": "Asia",
        "dificultad": 1
    },
    {
        "id": 119,
        "pregunta": "¿Cuál es la capital de Escocia?",
        "opcions": [
            { "resposta": "Edimburgo", "correcta": true },
            { "resposta": "Glasgow", "correcta": false },
            { "resposta": "Aberdeen", "correcta": false },
            { "resposta": "Dundee", "correcta": false }
        ],
        "imatge": "/images/edimburgo.jpg",
        "continente": "Europa",
        "dificultad": 1
    },
    {
        "id": 120,
        "pregunta": "¿Cuál es la capital de Luxemburgo?",
        "opcions": [
            { "resposta": "Luxemburgo", "correcta": true },
            { "resposta": "Esch-sur-Alzette", "correcta": false },
            { "resposta": "Differdange", "correcta": false },
            { "resposta": "Dudelange", "correcta": false }
        ],
        "imatge": "/images/luxemburgo.jpg",
        "continente": "Europa",
        "dificultad": 1
    },
    {
        "id": 121,
        "pregunta": "¿Cuál es la capital de Gales?",
        "opcions": [
            { "resposta": "Cardiff", "correcta": true },
            { "resposta": "Swansea", "correcta": false },
            { "resposta": "Newport", "correcta": false },
            { "resposta": "Bangor", "correcta": false }
        ],
        "imatge": "/images/cardiff.jpg",
        "continente": "Europa",
        "dificultad": 1
    },
    {
        "id": 122,
        "pregunta": "¿Cuál es la capital de Irlanda del Norte?",
        "opcions": [
            { "resposta": "Belfast", "correcta": true },
            { "resposta": "Londonderry", "correcta": false },
            { "resposta": "Lisburn", "correcta": false },
            { "resposta": "Newry", "correcta": false }
        ],
        "imatge": "/images/belfast.jpg",
        "continente": "Europa",
        "dificultad": 1
    }
];

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

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
