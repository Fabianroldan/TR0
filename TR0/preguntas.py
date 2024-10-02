import json

data = {
    "preguntes": [
        {
        "id": 1,
        "pregunta": "¿Cuál es la capital de España?",
        "opcions": [
            { "resposta": "Barcelona", "correcta": False },
            { "resposta": "Madrid", "correcta": True },
            { "resposta": "Valencia", "correcta": False },
            { "resposta": "Sevilla", "correcta": False }
        ],
        "imatge": "images/madrid.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 2,
        "pregunta": "¿Cuál es la capital de Francia?",
        "opcions": [
            { "resposta": "Lyon", "correcta": False },
            { "resposta": "Marsella", "correcta": False },
            { "resposta": "París", "correcta": True },
            { "resposta": "Niza", "correcta": False }
        ],
        "imatge": "/images/paris.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 3,
        "pregunta": "¿Cuál es la capital de Alemania?",
        "opcions": [
            { "resposta": "Berlín", "correcta": True },
            { "resposta": "Múnich", "correcta": False },
            { "resposta": "Fráncfort", "correcta": False },
            { "resposta": "Hamburgo", "correcta": False }
        ],
        "imatge": "/images/berlin.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 4,
        "pregunta": "¿Cuál es la capital de Italia?",
        "opcions": [
            { "resposta": "Milán", "correcta": False },
            { "resposta": "Roma", "correcta": True },
            { "resposta": "Nápoles", "correcta": False },
            { "resposta": "Turín", "correcta": False }
        ],
        "imatge": "/images/roma.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 5,
        "pregunta": "¿Cuál es la capital de Portugal?",
        "opcions": [
            { "resposta": "Oporto", "correcta": False },
            { "resposta": "Lisboa", "correcta": True },
            { "resposta": "Braga", "correcta": False },
            { "resposta": "Coímbra", "correcta": False }
        ],
        "imatge": "/images/lisboa.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 6,
        "pregunta": "¿Cuál es la capital de Inglaterra?",
        "opcions": [
            { "resposta": "Londres", "correcta": True },
            { "resposta": "Manchester", "correcta": False },
            { "resposta": "Liverpool", "correcta": False },
            { "resposta": "Birmingham", "correcta": False }
        ],
        "imatge": "/images/londres.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 7,
        "pregunta": "¿Cuál es la capital de Canadá?",
        "opcions": [
            { "resposta": "Toronto", "correcta": False },
            { "resposta": "Ottawa", "correcta": True },
            { "resposta": "Vancouver", "correcta": False },
            { "resposta": "Montreal", "correcta": False }
        ],
        "imatge": "/images/ottawa.jpg",
        "continente": "América del Norte",
        "dificultad": 2
    },
    {
        "id": 8,
        "pregunta": "¿Cuál es la capital de Australia?",
        "opcions": [
            { "resposta": "Sídney", "correcta": False },
            { "resposta": "Canberra", "correcta": True },
            { "resposta": "Melbourne", "correcta": False },
            { "resposta": "Perth", "correcta": False }
        ],
        "imatge": "/images/canberra.jpg",
        "continente": "Oceanía",
        "dificultad": 3
    },
    {
        "id": 9,
        "pregunta": "¿Cuál es la capital de Brasil?",
        "opcions": [
            { "resposta": "Río de Janeiro", "correcta": False },
            { "resposta": "Brasilia", "correcta": True },
            { "resposta": "São Paulo", "correcta": False },
            { "resposta": "Salvador", "correcta": False }
        ],
        "imatge": "/images/brasilia.jpg",
        "continente": "América del Sur",
        "dificultad": 2
    },
    {
        "id": 10,
        "pregunta": "¿Cuál es la capital de Argentina?",
        "opcions": [
            { "resposta": "Córdoba", "correcta": False },
            { "resposta": "Buenos Aires", "correcta": True },
            { "resposta": "Rosario", "correcta": False },
            { "resposta": "La Plata", "correcta": False }
        ],
        "imatge": "/images/buenos_aires.jpg",
        "continente": "América del Sur",
        "dificultad": 2
    },
    {
        "id": 11,
        "pregunta": "¿Cuál es la capital de Chile?",
        "opcions": [
            { "resposta": "Santiago", "correcta": True },
            { "resposta": "Valparaíso", "correcta": False },
            { "resposta": "Concepción", "correcta": False },
            { "resposta": "La Serena", "correcta": False }
        ],
        "imatge": "/images/santiago.jpg",
        "continente": "América del Sur",
        "dificultad": 2
    },
    {
        "id": 12,
        "pregunta": "¿Cuál es la capital de Colombia?",
        "opcions": [
            { "resposta": "Cartagena", "correcta": False },
            { "resposta": "Bogotá", "correcta": True },
            { "resposta": "Medellín", "correcta": False },
            { "resposta": "Cali", "correcta": False }
        ],
        "imatge": "/images/bogota.jpg",
        "continente": "América del Sur",
        "dificultad": 2
    },
    {
        "id": 13,
        "pregunta": "¿Cuál es la capital de Perú?",
        "opcions": [
            { "resposta": "Lima", "correcta": True },
            { "resposta": "Arequipa", "correcta": False },
            { "resposta": "Cusco", "correcta": False },
            { "resposta": "Trujillo", "correcta": False }
        ],
        "imatge": "/images/lima.jpg",
        "continente": "América del Sur",
        "dificultad": 2
    },
    {
        "id": 14,
        "pregunta": "¿Cuál es la capital de Venezuela?",
        "opcions": [
            { "resposta": "Caracas", "correcta": True },
            { "resposta": "Maracaibo", "correcta": False },
            { "resposta": "Valencia", "correcta": False },
            { "resposta": "Barquisimeto", "correcta": False }
        ],
        "imatge": "/images/caracas.jpg",
        "continente": "América del Sur",
        "dificultad": 2
    },
    {
        "id": 15,
        "pregunta": "¿Cuál es la capital de Uruguay?",
        "opcions": [
            { "resposta": "Montevideo", "correcta": True },
            { "resposta": "Salto", "correcta": False },
            { "resposta": "Paysandú", "correcta": False },
            { "resposta": "Tacuarembó", "correcta": False }
        ],
        "imatge": "/images/montevideo.jpg",
        "continente": "América del Sur",
        "dificultad": 2
    },
    {
        "id": 16,
        "pregunta": "¿Cuál es la capital de Paraguay?",
        "opcions": [
            { "resposta": "Asunción", "correcta": True },
            { "resposta": "Ciudad del Este", "correcta": False },
            { "resposta": "Encarnación", "correcta": False },
            { "resposta": "Luque", "correcta": False }
        ],
        "imatge": "/images/asuncion.jpg",
        "continente": "América del Sur",
        "dificultad": 2
    },
    {
        "id": 17,
        "pregunta": "¿Cuál es la capital de Bolivia?",
        "opcions": [
            { "resposta": "Sucre", "correcta": False },
            { "resposta": "La Paz", "correcta": True },
            { "resposta": "Cochabamba", "correcta": False },
            { "resposta": "Santa Cruz de la Sierra", "correcta": False }
        ],
        "imatge": "/images/la_paz.jpg",
        "continente": "América del Sur",
        "dificultad": 2
    },
    {
        "id": 18,
        "pregunta": "¿Cuál es la capital de Ecuador?",
        "opcions": [
            { "resposta": "Guayaquil", "correcta": False },
            { "resposta": "Quito", "correcta": True },
            { "resposta": "Cuenca", "correcta": False },
            { "resposta": "Manta", "correcta": False }
        ],
        "imatge": "/images/quito.jpg",
        "continente": "América del Sur",
        "dificultad": 2
    },
    {
        "id": 19,
        "pregunta": "¿Cuál es la capital de Grecia?",
        "opcions": [
            { "resposta": "Salónica", "correcta": False },
            { "resposta": "Atenas", "correcta": True },
            { "resposta": "Patras", "correcta": False },
            { "resposta": "Heraclión", "correcta": False }
        ],
        "imatge": "/images/atenas.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 20,
        "pregunta": "¿Cuál es la capital de Suecia?",
        "opcions": [
            { "resposta": "Gotemburgo", "correcta": False },
            { "resposta": "Estocolmo", "correcta": True },
            { "resposta": "Malmö", "correcta": False },
            { "resposta": "Upsala", "correcta": False }
        ],
        "imatge": "/images/estocolmo.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 21,
        "pregunta": "¿Cuál es la capital de Noruega?",
        "opcions": [
            { "resposta": "Bergen", "correcta": False },
            { "resposta": "Oslo", "correcta": True },
            { "resposta": "Stavanger", "correcta": False },
            { "resposta": "Trondheim", "correcta": False }
        ],
        "imatge": "/images/oslo.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 22,
        "pregunta": "¿Cuál es la capital de Finlandia?",
        "opcions": [
            { "resposta": "Tampere", "correcta": False },
            { "resposta": "Helsinki", "correcta": True },
            { "resposta": "Oulu", "correcta": False },
            { "resposta": "Turku", "correcta": False }
        ],
        "imatge": "/images/helsinki.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 23,
        "pregunta": "¿Cuál es la capital de Dinamarca?",
        "opcions": [
            { "resposta": "Aarhus", "correcta": False },
            { "resposta": "Copenhague", "correcta": True },
            { "resposta": "Odense", "correcta": False },
            { "resposta": "Aalborg", "correcta": False }
        ],
        "imatge": "/images/copenhague.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 24,
        "pregunta": "¿Cuál es la capital de Suiza?",
        "opcions": [
            { "resposta": "Zúrich", "correcta": False },
            { "resposta": "Berna", "correcta": True },
            { "resposta": "Ginebra", "correcta": False },
            { "resposta": "Basilea", "correcta": False }
        ],
        "imatge": "/images/berna.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 25,
        "pregunta": "¿Cuál es la capital de Austria?",
        "opcions": [
            { "resposta": "Salzburgo", "correcta": False },
            { "resposta": "Viena", "correcta": True },
            { "resposta": "Innsbruck", "correcta": False },
            { "resposta": "Graz", "correcta": False }
        ],
        "imatge": "/images/viena.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 26,
        "pregunta": "¿Cuál es la capital de Bélgica?",
        "opcions": [
            { "resposta": "Brujas", "correcta": False },
            { "resposta": "Bruselas", "correcta": True },
            { "resposta": "Amberes", "correcta": False },
            { "resposta": "Gante", "correcta": False }
        ],
        "imatge": "/images/bruselas.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 27,
        "pregunta": "¿Cuál es la capital de Países Bajos?",
        "opcions": [
            { "resposta": "Róterdam", "correcta": False },
            { "resposta": "Ámsterdam", "correcta": True },
            { "resposta": "La Haya", "correcta": False },
            { "resposta": "Eindhoven", "correcta": False }
        ],
        "imatge": "/images/amsterdam.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 28,
        "pregunta": "¿Cuál es la capital de Irlanda?",
        "opcions": [
            { "resposta": "Cork", "correcta": False },
            { "resposta": "Dublín", "correcta": True },
            { "resposta": "Galway", "correcta": False },
            { "resposta": "Limerick", "correcta": False }
        ],
        "imatge": "/images/dublin.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 29,
        "pregunta": "¿Cuál es la capital de Polonia?",
        "opcions": [
            { "resposta": "Cracovia", "correcta": False },
            { "resposta": "Varsovia", "correcta": True },
            { "resposta": "Gdansk", "correcta": False },
            { "resposta": "Poznań", "correcta": False }
        ],
        "imatge": "/images/varsovia.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 30,
        "pregunta": "¿Cuál es la capital de Hungría?",
        "opcions": [
            { "resposta": "Debrecen", "correcta": False },
            { "resposta": "Budapest", "correcta": True },
            { "resposta": "Szeged", "correcta": False },
            { "resposta": "Miskolc", "correcta": False }
        ],
        "imatge": "/images/budapest.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 31,
        "pregunta": "¿Cuál es la capital de República Checa?",
        "opcions": [
            { "resposta": "Brno", "correcta": False },
            { "resposta": "Praga", "correcta": True },
            { "resposta": "Ostrava", "correcta": False },
            { "resposta": "Pilsen", "correcta": False }
        ],
        "imatge": "/images/praga.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 32,
        "pregunta": "¿Cuál es la capital de Eslovaquia?",
        "opcions": [
            { "resposta": "Kosice", "correcta": False },
            { "resposta": "Bratislava", "correcta": True },
            { "resposta": "Nitra", "correcta": False },
            { "resposta": "Trnava", "correcta": False }
        ],
        "imatge": "/images/bratislava.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 33,
        "pregunta": "¿Cuál es la capital de Croacia?",
        "opcions": [
            { "resposta": "Split", "correcta": False },
            { "resposta": "Zagreb", "correcta": True },
            { "resposta": "Dubrovnik", "correcta": False },
            { "resposta": "Rijeka", "correcta": False }
        ],
        "imatge": "/images/zagreb.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 34,
        "pregunta": "¿Cuál es la capital de Eslovenia?",
        "opcions": [
            { "resposta": "Maribor", "correcta": False },
            { "resposta": "Liubliana", "correcta": True },
            { "resposta": "Koper", "correcta": False },
            { "resposta": "Celje", "correcta": False }
        ],
        "imatge": "/images/liubliana.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 35,
        "pregunta": "¿Cuál es la capital de Rumanía?",
        "opcions": [
            { "resposta": "Cluj-Napoca", "correcta": False },
            { "resposta": "Bucarest", "correcta": True },
            { "resposta": "Timișoara", "correcta": False },
            { "resposta": "Iași", "correcta": False }
        ],
        "imatge": "/images/bucarest.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 36,
        "pregunta": "¿Cuál es la capital de Bulgaria?",
        "opcions": [
            { "resposta": "Varna", "correcta": False },
            { "resposta": "Sofía", "correcta": True },
            { "resposta": "Plovdiv", "correcta": False },
            { "resposta": "Burgas", "correcta": False }
        ],
        "imatge": "/images/sofia.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 37,
        "pregunta": "¿Cuál es la capital de Serbia?",
        "opcions": [
            { "resposta": "Novi Sad", "correcta": False },
            { "resposta": "Belgrado", "correcta": True },
            { "resposta": "Niš", "correcta": False },
            { "resposta": "Kragujevac", "correcta": False }
        ],
        "imatge": "/images/belgrado.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 38,
        "pregunta": "¿Cuál es la capital de Bosnia y Herzegovina?",
        "opcions": [
            { "resposta": "Mostar", "correcta": False },
            { "resposta": "Sarajevo", "correcta": True },
            { "resposta": "Banja Luka", "correcta": False },
            { "resposta": "Tuzla", "correcta": False }
        ],
        "imatge": "/images/sarajevo.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 39,
        "pregunta": "¿Cuál es la capital de Macedonia del Norte?",
        "opcions": [
            { "resposta": "Ohrid", "correcta": False },
            { "resposta": "Skopie", "correcta": True },
            { "resposta": "Bitola", "correcta": False },
            { "resposta": "Tetovo", "correcta": False }
        ],
        "imatge": "/images/skopie.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 40,
        "pregunta": "¿Cuál es la capital de Albania?",
        "opcions": [
            { "resposta": "Durres", "correcta": False },
            { "resposta": "Tirana", "correcta": True },
            { "resposta": "Shkodra", "correcta": False },
            { "resposta": "Vlora", "correcta": False }
        ],
        "imatge": "/images/tirana.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 41,
        "pregunta": "¿Cuál es la capital de Montenegro?",
        "opcions": [
            { "resposta": "Bar", "correcta": False },
            { "resposta": "Podgorica", "correcta": True },
            { "resposta": "Kotor", "correcta": False },
            { "resposta": "Herceg Novi", "correcta": False }
        ],
        "imatge": "/images/podgorica.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 42,
        "pregunta": "¿Cuál es la capital de Kosovo?",
        "opcions": [
            { "resposta": "Prizren", "correcta": False },
            { "resposta": "Pristina", "correcta": True },
            { "resposta": "Gjakova", "correcta": False },
            { "resposta": "Peja", "correcta": False }
        ],
        "imatge": "/images/pristina.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 43,
        "pregunta": "¿Cuál es la capital de Ucrania?",
        "opcions": [
            { "resposta": "Odesa", "correcta": False },
            { "resposta": "Kiev", "correcta": True },
            { "resposta": "Leópolis", "correcta": False },
            { "resposta": "Járkov", "correcta": False }
        ],
        "imatge": "/images/kiev.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 44,
        "pregunta": "¿Cuál es la capital de Bielorrusia?",
        "opcions": [
            { "resposta": "Gomel", "correcta": False },
            { "resposta": "Minsk", "correcta": True },
            { "resposta": "Brest", "correcta": False },
            { "resposta": "Vítebsk", "correcta": False }
        ],
        "imatge": "/images/minsk.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 45,
        "pregunta": "¿Cuál es la capital de Letonia?",
        "opcions": [
            { "resposta": "Daugavpils", "correcta": False },
            { "resposta": "Riga", "correcta": True },
            { "resposta": "Liepaja", "correcta": False },
            { "resposta": "Jelgava", "correcta": False }
        ],
        "imatge": "/images/riga.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 46,
        "pregunta": "¿Cuál es la capital de Lituania?",
        "opcions": [
            { "resposta": "Kaunas", "correcta": False },
            { "resposta": "Vilna", "correcta": True },
            { "resposta": "Klaipeda", "correcta": False },
            { "resposta": "Šiauliai", "correcta": False }
        ],
        "imatge": "/images/vilna.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 47,
        "pregunta": "¿Cuál es la capital de Estonia?",
        "opcions": [
            { "resposta": "Tartu", "correcta": False },
            { "resposta": "Tallin", "correcta": True },
            { "resposta": "Narva", "correcta": False },
            { "resposta": "Pärnu", "correcta": False }
        ],
        "imatge": "/images/tallin.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 48,
        "pregunta": "¿Cuál es la capital de Moldavia?",
        "opcions": [
            { "resposta": "Tiráspol", "correcta": False },
            { "resposta": "Chisináu", "correcta": True },
            { "resposta": "Bălți", "correcta": False },
            { "resposta": "Cahul", "correcta": False }
        ],
        "imatge": "/images/chisinau.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 49,
        "pregunta": "¿Cuál es la capital de Armenia?",
        "opcions": [
            { "resposta": "Gyumri", "correcta": False },
            { "resposta": "Ereván", "correcta": True },
            { "resposta": "Vanadzor", "correcta": False },
            { "resposta": "Ejmiatsin", "correcta": False }
        ],
        "imatge": "/images/erevan.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 50,
        "pregunta": "¿Cuál es la capital de Georgia?",
        "opcions": [
            { "resposta": "Batumi", "correcta": False },
            { "resposta": "Tiflis", "correcta": True },
            { "resposta": "Kutaisi", "correcta": False },
            { "resposta": "Rustavi", "correcta": False }
        ],
        "imatge": "/images/tiflis.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 51,
        "pregunta": "¿Cuál es la capital de Azerbaiyán?",
        "opcions": [
            { "resposta": "Ganja", "correcta": False },
            { "resposta": "Bakú", "correcta": True },
            { "resposta": "Sumqayit", "correcta": False },
            { "resposta": "Naxçıvan", "correcta": False }
        ],
        "imatge": "/images/baku.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 52,
        "pregunta": "¿Cuál es la capital de Kazajistán?",
        "opcions": [
            { "resposta": "Almaty", "correcta": False },
            { "resposta": "Astana", "correcta": True },
            { "resposta": "Shymkent", "correcta": False },
            { "resposta": "Karaganda", "correcta": False }
        ],
        "imatge": "/images/astana.jpg",
        "continente": "Asia",
        "dificultad": 2
    },
    {
        "id": 53,
        "pregunta": "¿Cuál es la capital de Uzbekistán?",
        "opcions": [
            { "resposta": "Samarkanda", "correcta": False },
            { "resposta": "Tashkent", "correcta": True },
            { "resposta": "Bujará", "correcta": False },
            { "resposta": "Andiján", "correcta": False }
        ],
        "imatge": "/images/tashkent.jpg",
        "continente": "Asia",
        "dificultad": 2
    },
    {
        "id": 54,
        "pregunta": "¿Cuál es la capital de Turkmenistán?",
        "opcions": [
            { "resposta": "Mary", "correcta": False },
            { "resposta": "Asjabad", "correcta": True },
            { "resposta": "Dashoguz", "correcta": False },
            { "resposta": "Turkmenabat", "correcta": False }
        ],
        "imatge": "/images/ashgabat.jpg",
        "continente": "Asia",
        "dificultad": 2
    },
    {
        "id": 55,
        "pregunta": "¿Cuál es la capital de Kirguistán?",
        "opcions": [
            { "resposta": "Osh", "correcta": False },
            { "resposta": "Biskek", "correcta": True },
            { "resposta": "Jalal-Abad", "correcta": False },
            { "resposta": "Karakol", "correcta": False }
        ],
        "imatge": "/images/biskek.jpg",
        "continente": "Asia",
        "dificultad": 2
    },
    {
        "id": 56,
        "pregunta": "¿Cuál es la capital de Tayikistán?",
        "opcions": [
            { "resposta": "Khujand", "correcta": False },
            { "resposta": "Dusambé", "correcta": True },
            { "resposta": "Kulob", "correcta": False },
            { "resposta": "Istaravshan", "correcta": False }
        ],
        "imatge": "/images/dusambe.jpg",
        "continente": "Asia",
        "dificultad": 2
    },
    {
        "id": 57,
        "pregunta": "¿Cuál es la capital de Afganistán?",
        "opcions": [
            { "resposta": "Kandahar", "correcta": False },
            { "resposta": "Kabul", "correcta": True },
            { "resposta": "Herat", "correcta": False },
            { "resposta": "Mazār-e Šarīf", "correcta": False }
        ],
        "imatge": "/images/kabul.jpg",
        "continente": "Asia",
        "dificultad": 2
    },
    {
        "id": 58,
        "pregunta": "¿Cuál es la capital de Pakistán?",
        "opcions": [
            { "resposta": "Karachi", "correcta": False },
            { "resposta": "Islamabad", "correcta": True },
            { "resposta": "Lahore", "correcta": False },
            { "resposta": "Faisalabad", "correcta": False }
        ],
        "imatge": "/images/islamabad.jpg",
        "continente": "Asia",
        "dificultad": 2
    },
    {
        "id": 59,
        "pregunta": "¿Cuál es la capital de Irán?",
        "opcions": [
            { "resposta": "Shiraz", "correcta": False },
            { "resposta": "Teherán", "correcta": True },
            { "resposta": "Isfahán", "correcta": False },
            { "resposta": "Mashhad", "correcta": False }
        ],
        "imatge": "/images/teheran.jpg",
        "continente": "Asia",
        "dificultad": 2
    },
    {
        "id": 69,
        "pregunta": "¿Cuál es la capital de Qatar?",
        "opcions": [
            { "resposta": "Al Khor", "correcta": False },
            { "resposta": "Doha", "correcta": True },
            { "resposta": "Al Wakrah", "correcta": False },
            { "resposta": "Umm Salal", "correcta": False }
        ],
        "imatge": "/images/doha.jpg",
        "continente": "Asia",
        "dificultad": 2
    },
    {
        "id": 70,
        "pregunta": "¿Cuál es la capital de China?",
        "opcions": [
            { "resposta": "Shanghái", "correcta": False },
            { "resposta": "Pekín", "correcta": True },
            { "resposta": "Cantón", "correcta": False },
            { "resposta": "Shenzhen", "correcta": False }
        ],
        "imatge": "/images/pekin.jpg",
        "continente": "Asia",
        "dificultad": 1
    },
    {
        "id": 71,
        "pregunta": "¿Cuál es la capital de Kuwait?",
        "opcions": [
            { "resposta": "Salmiya", "correcta": False },
            { "resposta": "Kuwait City", "correcta": True },
            { "resposta": "Hawalli", "correcta": False },
            { "resposta": "Jahra", "correcta": False }
        ],
        "imatge": "/images/kuwait_city.jpg",
        "continente": "Asia",
        "dificultad": 2
    },
    {
        "id": 72,
        "pregunta": "¿Cuál es la capital de Chipre?",
        "opcions": [
            { "resposta": "Limasol", "correcta": False },
            { "resposta": "Nicosia", "correcta": True },
            { "resposta": "Lárnaca", "correcta": False },
            { "resposta": "Pafos", "correcta": False }
        ],
        "imatge": "/images/nicosia.jpg",
        "continente": "Asia",
        "dificultad": 2
    },
    {
        "id": 73,
        "pregunta": "¿Cuál es la capital de Turquía?",
        "opcions": [
            { "resposta": "Estambul", "correcta": False },
            { "resposta": "Ankara", "correcta": True },
            { "resposta": "Izmir", "correcta": False },
            { "resposta": "Antalya", "correcta": False }
        ],
        "imatge": "/images/ankara.jpg",
        "continente": "Asia",
        "dificultad": 2
    },
    {
        "id": 74,
        "pregunta": "¿Cuál es la capital de Corea del Norte?",
        "opcions": [
            { "resposta": "Pionyang", "correcta": True },
            { "resposta": "Nampo", "correcta": False },
            { "resposta": "Sinuiju", "correcta": False },
            { "resposta": "Wonsan", "correcta": False }
        ],
        "imatge": "/images/pyongyang.jpg",
        "continente": "Asia",
        "dificultad": 2
    },
    {
        "id": 75,
        "pregunta": "¿Cuál es la capital de Egipto?",
        "opcions": [
            { "resposta": "Alejandría", "correcta": False },
            { "resposta": "El Cairo", "correcta": True },
            { "resposta": "Giza", "correcta": False },
            { "resposta": "Luxor", "correcta": False }
        ],
        "imatge": "/images/cairo.jpg",
        "continente": "África",
        "dificultad": 2
    },
    {
        "id": 76,
        "pregunta": "¿Cuál es la capital de Libia?",
        "opcions": [
            { "resposta": "Bengasi", "correcta": False },
            { "resposta": "Trípoli", "correcta": True },
            { "resposta": "Misurata", "correcta": False },
            { "resposta": "Sabha", "correcta": False }
        ],
        "imatge": "/images/tripoli.jpg",
        "continente": "África",
        "dificultad": 2
    },
    {
        "id": 77,
        "pregunta": "¿Cuál es la capital de Corea del Sur?",
        "opcions": [
            { "resposta": "Seúl", "correcta": True },
            { "resposta": "Busan", "correcta": False },
            { "resposta": "Incheon", "correcta": False },
            { "resposta": "Suwon", "correcta": False }
        ],
        "imatge": "/images/seul.jpg",
        "continente": "Asia",
        "dificultad": 1
    },
    {
        "id": 78,
        "pregunta": "¿Cuál es la capital de Vietnam?",
        "opcions": [
            { "resposta": "Hanoi", "correcta": True },
            { "resposta": "Ho Chi Minh", "correcta": False },
            { "resposta": "Da Nang", "correcta": False },
            { "resposta": "Nha Trang", "correcta": False }
        ],
        "imatge": "/images/hanoi.jpg",
        "continente": "Asia",
        "dificultad": 1
    },
    {
        "id": 79,
        "pregunta": "¿Cuál es la capital de Tailandia?",
        "opcions": [
            { "resposta": "Bangkok", "correcta": True },
            { "resposta": "Chiang Mai", "correcta": False },
            { "resposta": "Pattaya", "correcta": False },
            { "resposta": "Phuket", "correcta": False }
        ],
        "imatge": "/images/bangkok.jpg",
        "continente": "Asia",
        "dificultad": 1
    },
    {
        "id": 80,
        "pregunta": "¿Cuál es la capital de Rusia?",
        "opcions": [
            { "resposta": "Moscú", "correcta": True },
            { "resposta": "San Petersburgo", "correcta": False },
            { "resposta": "Novosibirsk", "correcta": False },
            { "resposta": "Ekaterimburgo", "correcta": False }
        ],
        "imatge": "/images/moscu.jpg",
        "continente": "Europa",
        "dificultad": 2
    },
    {
        "id": 81,
        "pregunta": "¿Cuál es la capital de Islandia?",
        "opcions": [
            { "resposta": "Reikiavik", "correcta": True },
            { "resposta": "Akureyri", "correcta": False },
            { "resposta": "Hafnarfjörður", "correcta": False },
            { "resposta": "Keflavík", "correcta": False }
        ],
        "imatge": "/images/reikiavik.jpg",
        "continente": "Europa",
        "dificultad": 1
    },
    {
        "id": 82,
        "pregunta": "¿Cuál es la capital de Kenia?",
        "opcions": [
            { "resposta": "Mombasa", "correcta": False },
            { "resposta": "Nairobi", "correcta": True },
            { "resposta": "Nakuru", "correcta": False },
            { "resposta": "Kisumu", "correcta": False }
        ],
        "imatge": "/images/nairobi.jpg",
        "continente": "África",
        "dificultad": 1
    },
    {
        "id": 83,
        "pregunta": "¿Cuál es la capital de Indonesia?",
        "opcions": [
            { "resposta": "Yakarta", "correcta": True },
            { "resposta": "Surabaya", "correcta": False },
            { "resposta": "Bandung", "correcta": False },
            { "resposta": "Denpasar", "correcta": False }
        ],
        "imatge": "/images/yakarta.jpg",
        "continente": "Asia",
        "dificultad": 1
    },
    {
        "id": 84,
        "pregunta": "¿Cuál es la capital de Malasia?",
        "opcions": [
            { "resposta": "Kuala Lumpur", "correcta": True },
            { "resposta": "George Town", "correcta": False },
            { "resposta": "Johor Bahru", "correcta": False },
            { "resposta": "Kota Bharu", "correcta": False }
        ],
        "imatge": "/images/kuala_lumpur.jpg",
        "continente": "Asia",
        "dificultad": 2
    },
    {
        "id": 85,
        "pregunta": "¿Cuál es la capital de Taiwán?",
        "opcions": [
            { "resposta": "Taipéi", "correcta": True },
            { "resposta": "Kaohsiung", "correcta": False },
            { "resposta": "Tainan", "correcta": False },
            { "resposta": "Taichung", "correcta": False }
        ],
        "imatge": "/images/taipei.jpg",
        "continente": "Asia",
        "dificultad": 2
    },
    {
        "id": 86,
        "pregunta": "¿Cuál es la capital de Mongolia?",
        "opcions": [
            { "resposta": "Ulán Bator", "correcta": True },
            { "resposta": "Erdenet", "correcta": False },
            { "resposta": "Darkhan", "correcta": False },
            { "resposta": "Ölgii", "correcta": False }
        ],
        "imatge": "/images/ulan_bator.jpg",
        "continente": "Asia",
        "dificultad": 2
    },
    {
        "id": 87,
        "pregunta": "¿Cuál es la capital de Zambia?",
        "opcions": [
            { "resposta": "Ndola", "correcta": False },
            { "resposta": "Lusaka", "correcta": True },
            { "resposta": "Kitwe", "correcta": False },
            { "resposta": "Livingstone", "correcta": False }
        ],
        "imatge": "/images/lusaka.jpg",
        "continente": "África",
        "dificultad": 1
    },
    {
        "id": 88,
        "pregunta": "¿Cuál es la capital de Singapur?",
        "opcions": [
            { "resposta": "Singapur", "correcta": True },
            { "resposta": "Sentosa", "correcta": False },
            { "resposta": "Jurong", "correcta": False },
            { "resposta": "Punggol", "correcta": False }
        ],
        "imatge": "/images/singapur.jpg",
        "continente": "Asia",
        "dificultad": 2
    },
    {
        "id": 89,
        "pregunta": "¿Cuál es la capital de Botsuana?",
        "opcions": [
            { "resposta": "Francistown", "correcta": False },
            { "resposta": "Gaborone", "correcta": True },
            { "resposta": "Maun", "correcta": False },
            { "resposta": "Kasane", "correcta": False }
        ],
        "imatge": "/images/gaborone.jpg",
        "continente": "África",
        "dificultad": 1
    },
    {
        "id": 90,
        "pregunta": "¿Cuál es la capital de Nueva Zelanda?",
        "opcions": [
            { "resposta": "Wellington", "correcta": True },
            { "resposta": "Auckland", "correcta": False },
            { "resposta": "Christchurch", "correcta": False },
            { "resposta": "Hamilton", "correcta": False }
        ],
        "imatge": "/images/wellington.jpg",
        "continente": "Oceanía",
        "dificultad": 2
    },
    {
        "id": 91,
        "pregunta": "¿Cuál es la capital de Angola?",
        "opcions": [
            { "resposta": "Lobito", "correcta": False },
            { "resposta": "Luanda", "correcta": True },
            { "resposta": "Huambo", "correcta": False },
            { "resposta": "Lubango", "correcta": False }
        ],
        "imatge": "/images/luanda.jpg",
        "continente": "África",
        "dificultad": 1
    },
    {
        "id": 92,
        "pregunta": "¿Cuál es la capital de Mozambique?",
        "opcions": [
            { "resposta": "Beira", "correcta": False },
            { "resposta": "Maputo", "correcta": True },
            { "resposta": "Nampula", "correcta": False },
            { "resposta": "Tete", "correcta": False }
        ],
        "imatge": "/images/maputo.jpg",
        "continente": "África",
        "dificultad": 1
    },
    {
        "id": 93,
        "pregunta": "¿Cuál es la capital de Madagascar?",
        "opcions": [
            { "resposta": "Toamasina", "correcta": False },
            { "resposta": "Antananarivo", "correcta": True },
            { "resposta": "Mahajanga", "correcta": False },
            { "resposta": "Fianarantsoa", "correcta": False }
        ],
        "imatge": "/images/antantanarivo.jpg",
        "continente": "África",
        "dificultad": 1
    },
    {
        "id": 94,
        "pregunta": "¿Cuál es la capital de Sudáfrica?",
        "opcions": [
            { "resposta": "Johannesburgo", "correcta": False },
            { "resposta": "Pretoria", "correcta": True },
            { "resposta": "Ciudad del Cabo", "correcta": False },
            { "resposta": "Durban", "correcta": False }
        ],
        "imatge": "/images/pretoria.jpg",
        "continente": "África",
        "dificultad": 2
    },
    {
        "id": 95,
        "pregunta": "¿Cuál es la capital de Marruecos?",
        "opcions": [
            { "resposta": "Rabat", "correcta": True },
            { "resposta": "Casablanca", "correcta": False },
            { "resposta": "Marrakech", "correcta": False },
            { "resposta": "Fez", "correcta": False }
        ],
        "imatge": "/images/rabat.jpg",
        "continente": "África",
        "dificultad": 1
    },
    {
        "id": 96,
        "pregunta": "¿Cuál es la capital de Argelia?",
        "opcions": [
            { "resposta": "Argel", "correcta": True },
            { "resposta": "Orán", "correcta": False },
            { "resposta": "Constantina", "correcta": False },
            { "resposta": "Annaba", "correcta": False }
        ],
        "imatge": "/images/argel.jpg",
        "continente": "África",
        "dificultad": 1
    },
    {
        "id": 97,
        "pregunta": "¿Cuál es la capital de Túnez?",
        "opcions": [
            { "resposta": "Túnez", "correcta": True },
            { "resposta": "Sfax", "correcta": False },
            { "resposta": "Susa", "correcta": False },
            { "resposta": "Kairuán", "correcta": False }
        ],
        "imatge": "/images/tunez.jpg",
        "continente": "África",
        "dificultad": 1
    },
    {
        "id": 98,
        "pregunta": "¿Cuál es la capital de Senegal?",
        "opcions": [
            { "resposta": "Dakar", "correcta": True },
            { "resposta": "Saint-Louis", "correcta": False },
            { "resposta": "Thiès", "correcta": False },
            { "resposta": "Ziguinchor", "correcta": False }
        ],
        "imatge": "/images/dakar.jpg",
        "continente": "África",
        "dificultad": 1
    },
    {
        "id": 99,
        "pregunta": "¿Cuál es la capital de Ghana?",
        "opcions": [
            { "resposta": "Acra", "correcta": True },
            { "resposta": "Kumasi", "correcta": False },
            { "resposta": "Tamale", "correcta": False },
            { "resposta": "Takoradi", "correcta": False }
        ],
        "imatge": "/images/acra.jpg",
        "continente": "África",
        "dificultad": 2
    },
    {
        "id": 100,
        "pregunta": "¿Cuál es la capital de Costa de Marfil?",
        "opcions": [
            { "resposta": "Yamusukro", "correcta": True },
            { "resposta": "Abiyán", "correcta": False },
            { "resposta": "Bouaké", "correcta": False },
            { "resposta": "San Pedro", "correcta": False }
        ],
        "imatge": "/images/yamusukro.jpg",
        "continente": "África",
        "dificultad": 2
    },
    {
        "id": 101,
        "pregunta": "¿Cuál es la capital de Estados Unidos?",
        "opcions": [
            { "resposta": "Washington, D.C.", "correcta": True },
            { "resposta": "Nueva York", "correcta": False },
            { "resposta": "Los Ángeles", "correcta": False },
            { "resposta": "Chicago", "correcta": False }
        ],
        "imatge": "/images/washington.jpg",
        "continente": "América del Norte",
        "dificultad": 1
    },
    {
        "id": 102,
        "pregunta": "¿Cuál es la capital de México?",
        "opcions": [
            { "resposta": "Ciudad de México", "correcta": True },
            { "resposta": "Guadalajara", "correcta": False },
            { "resposta": "Monterrey", "correcta": False },
            { "resposta": "Cancún", "correcta": False }
        ],
        "imatge": "/images/cdmx.jpg",
        "continente": "América del Norte",
        "dificultad": 1
    },
    {
        "id": 103,
        "pregunta": "¿Cuál es la capital de Andorra?",
        "opcions": [
            { "resposta": "Andorra la Vieja", "correcta": True },
            { "resposta": "Encamp", "correcta": False },
            { "resposta": "La Massana", "correcta": False },
            { "resposta": "Ordino", "correcta": False }
        ],
        "imatge": "/images/andorra.jpg",
        "continente": "Europa",
        "dificultad": 3
    },
    {
        "id": 104,
        "pregunta": "¿Cuál es la capital de Nigeria?",
        "opcions": [
            { "resposta": "Abuja", "correcta": True },
            { "resposta": "Lagos", "correcta": False },
            { "resposta": "Kano", "correcta": False },
            { "resposta": "Ibadan", "correcta": False }
        ],
        "imatge": "/images/abuja.jpg",
        "continente": "África",
        "dificultad": 2
    },
    {
        "id": 105,
        "pregunta": "¿Cuál es la capital de la República Democrática del Congo?",
        "opcions": [
            { "resposta": "Kinshasa", "correcta": True },
            { "resposta": "Lubumbashi", "correcta": False },
            { "resposta": "Goma", "correcta": False },
            { "resposta": "Mbuji-Mayi", "correcta": False }
        ],
        "imatge": "/images/kinshasa.jpg",
        "continente": "África",
        "dificultad": 2
    },
    {
        "id": 106,
        "pregunta": "¿Cuál es la capital de Cuba?",
        "opcions": [
            { "resposta": "La Habana", "correcta": True },
            { "resposta": "Santiago de Cuba", "correcta": False },
            { "resposta": "Camagüey", "correcta": False },
            { "resposta": "Holguín", "correcta": False }
        ],
        "imatge": "/images/lahabana.jpg",
        "continente": "América del Norte",
        "dificultad": 1
    },
    {
        "id": 107,
        "pregunta": "¿Cuál es la capital de Guatemala?",
        "opcions": [
            { "resposta": "Ciudad de Guatemala", "correcta": True },
            { "resposta": "Antigua Guatemala", "correcta": False },
            { "resposta": "Quetzaltenango", "correcta": False },
            { "resposta": "Escuintla", "correcta": False }
        ],
        "imatge": "/images/guatemala.jpg",
        "continente": "América Central",
        "dificultad": 2
    },
    {
        "id": 108,
        "pregunta": "¿Cuál es la capital de Honduras?",
        "opcions": [
            { "resposta": "Tegucigalpa", "correcta": True },
            { "resposta": "San Pedro Sula", "correcta": False },
            { "resposta": "La Ceiba", "correcta": False },
            { "resposta": "Comayagua", "correcta": False }
        ],
        "imatge": "/images/tegucigalpa.jpg",
        "continente": "América Central",
        "dificultad": 2
    },
    {
        "id": 109,
        "pregunta": "¿Cuál es la capital de El Salvador?",
        "opcions": [
            { "resposta": "San Salvador", "correcta": True },
            { "resposta": "Santa Ana", "correcta": False },
            { "resposta": "San Miguel", "correcta": False },
            { "resposta": "Sonsonate", "correcta": False }
        ],
        "imatge": "/images/sansalvador.jpg",
        "continente": "América Central",
        "dificultad": 2
    },
    {
        "id": 110,
        "pregunta": "¿Cuál es la capital de Costa Rica?",
        "opcions": [
            { "resposta": "San José", "correcta": True },
            { "resposta": "Alajuela", "correcta": False },
            { "resposta": "Cartago", "correcta": False },
            { "resposta": "Heredia", "correcta": False }
        ],
        "imatge": "/images/sanjose.jpg",
        "continente": "América Central",
        "dificultad": 2
    },
    {
        "id": 111,
        "pregunta": "¿Cuál es la capital de Panamá?",
        "opcions": [
            { "resposta": "Ciudad de Panamá", "correcta": True },
            { "resposta": "Colón", "correcta": False },
            { "resposta": "David", "correcta": False },
            { "resposta": "Santiago", "correcta": False }
        ],
        "imatge": "/images/panama.jpg",
        "continente": "América Central",
        "dificultad": 2
    },
    {
        "id": 112,
        "pregunta": "¿Cuál es la capital de la República Dominicana?",
        "opcions": [
            { "resposta": "Santo Domingo", "correcta": True },
            { "resposta": "Santiago de los Caballeros", "correcta": False },
            { "resposta": "La Vega", "correcta": False },
            { "resposta": "San Pedro de Macorís", "correcta": False }
        ],
        "imatge": "/images/santodomingo.jpg",
        "continente": "América Central",
        "dificultad": 1
    },
    {
        "id": 113,
        "pregunta": "¿Cuál es la capital de Bangladesh?",
        "opcions": [
            { "resposta": "Daca", "correcta": True },
            { "resposta": "Chittagong", "correcta": False },
            { "resposta": "Khulna", "correcta": False },
            { "resposta": "Rajshahi", "correcta": False }
        ],
        "imatge": "/images/daca.jpg",
        "continente": "Asia",
        "dificultad": 1
    },
    {
        "id": 114,
        "pregunta": "¿Cuál es la capital de Laos?",
        "opcions": [
            { "resposta": "Vientián", "correcta": True },
            { "resposta": "Luang Prabang", "correcta": False },
            { "resposta": "Pakse", "correcta": False },
            { "resposta": "Savannakhet", "correcta": False }
        ],
        "imatge": "/images/vientian.jpg",
        "continente": "Asia",
        "dificultad": 1
    },
    {
        "id": 115,
        "pregunta": "¿Cuál es la capital de Filipinas?",
        "opcions": [
            { "resposta": "Manila", "correcta": True },
            { "resposta": "Cebú", "correcta": False },
            { "resposta": "Dávao", "correcta": False },
            { "resposta": "Quezón", "correcta": False }
        ],
        "imatge": "/images/manila.jpg",
        "continente": "Asia",
        "dificultad": 1
    },
    {
        "id": 116,
        "pregunta": "¿Cuál es la capital de Brunei?",
        "opcions": [
            { "resposta": "Bandar Seri Begawan", "correcta": True },
            { "resposta": "Kuala Belait", "correcta": False },
            { "resposta": "Tutong", "correcta": False },
            { "resposta": "Seria", "correcta": False }
        ],
        "imatge": "/images/brunei.jpg",
        "continente": "Asia",
        "dificultad": 1
    },
    {
        "id": 117,
        "pregunta": "¿Cuál es la capital de Nepal?",
        "opcions": [
            { "resposta": "Katmandú", "correcta": True },
            { "resposta": "Pokhara", "correcta": False },
            { "resposta": "Lalitpur", "correcta": False },
            { "resposta": "Biratnagar", "correcta": False }
        ],
        "imatge": "/images/katmandu.jpg",
        "continente": "Asia",
        "dificultad": 1
    },
    {
        "id": 118,
        "pregunta": "¿Cuál es la capital de Bután?",
        "opcions": [
            { "resposta": "Thimphu", "correcta": True },
            { "resposta": "Paro", "correcta": False },
            { "resposta": "Punakha", "correcta": False },
            { "resposta": "Trongsa", "correcta": False }
        ],
        "imatge": "/images/thimphu.jpg",
        "continente": "Asia",
        "dificultad": 1
    },
    {
        "id": 119,
        "pregunta": "¿Cuál es la capital de Escocia?",
        "opcions": [
            { "resposta": "Edimburgo", "correcta": True },
            { "resposta": "Glasgow", "correcta": False },
            { "resposta": "Aberdeen", "correcta": False },
            { "resposta": "Dundee", "correcta": False }
        ],
        "imatge": "/images/edimburgo.jpg",
        "continente": "Europa",
        "dificultad": 1
    },
    {
        "id": 120,
        "pregunta": "¿Cuál es la capital de Luxemburgo?",
        "opcions": [
            { "resposta": "Luxemburgo", "correcta": True },
            { "resposta": "Esch-sur-Alzette", "correcta": False },
            { "resposta": "Differdange", "correcta": False },
            { "resposta": "Dudelange", "correcta": False }
        ],
        "imatge": "/images/luxemburgo.jpg",
        "continente": "Europa",
        "dificultad": 1
    },
    {
        "id": 121,
        "pregunta": "¿Cuál es la capital de Gales?",
        "opcions": [
            { "resposta": "Cardiff", "correcta": True },
            { "resposta": "Swansea", "correcta": False },
            { "resposta": "Newport", "correcta": False },
            { "resposta": "Bangor", "correcta": False }
        ],
        "imatge": "/images/cardiff.jpg",
        "continente": "Europa",
        "dificultad": 1
    },
    {
        "id": 122,
        "pregunta": "¿Cuál es la capital de Irlanda del Norte?",
        "opcions": [
            { "resposta": "Belfast", "correcta": True },
            { "resposta": "Londonderry", "correcta": False },
            { "resposta": "Lisburn", "correcta": False },
            { "resposta": "Newry", "correcta": False }
        ],
        "imatge": "/images/belfast.jpg",
        "continente": "Europa",
        "dificultad": 1
    }
    ]
}

for pregunta in data["preguntes"]:
    print(f"Pregunta {pregunta['id']}: {pregunta['pregunta']}")
    for i, opcion in enumerate(pregunta['opcions'], start=1):
        print(f"  Opción {i}: {opcion['resposta']} (Correcta: {opcion['correcta']})")
    print(f"  Imagen: {pregunta['imatge']}\n")