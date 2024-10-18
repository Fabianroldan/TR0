import json
import matplotlib.pyplot as plt
import pandas as pd
import warnings
from datetime import datetime
import os

warnings.filterwarnings("ignore")

# Rutas a los archivos
routeData = './dades.json'
today_date = datetime.now().strftime("%d-%m-%Y")
statisticsRoute = f'./dades.json'
outputImagePath = f'../images/18-10-2024/output.png'

# Crear la carpeta para guardar la imagen si no existe
if not os.path.exists(f'../images/18-10-2024'):
    os.makedirs(f'../images/18-10-2024')

# Comprobar si existen los archivos necesarios
if os.path.exists(statisticsRoute):
    with open(statisticsRoute, encoding='utf-8') as f:  # Especificar la codificación
        todayData = json.load(f)
        print("todayData:", todayData)  # Mensaje de depuración
else:
    print(f"El archivo {statisticsRoute} no se encuentra.")
    exit()

if os.path.exists(routeData):
    with open(routeData, encoding='utf-8') as f:  # Especificar la codificación
        fulldata = json.load(f)
        print("fulldata:", fulldata)  # Mensaje de depuración
else:
    print(f"El archivo {routeData} no se encuentra.")
    exit()

Data = []

# Asegúrate de que todayData contenga elementos antes de acceder
for item in todayData['dadesPerPregunta']:  # Cambiado para acceder correctamente
    if "correctes" in item and "intents" in item:  # Verificar si los campos existen
        perEncertades = round((item["correctes"] / item["intents"]) * 100, 2)
        for data in fulldata['dadesPerPregunta']:  # Cambiado para acceder correctamente
            if data["id"] == item["id"]:
                Data.append({
                    "Pregunta": data["pregunta"],
                    "Percentatge d'encert": perEncertades
                })

# Comprobar si hay datos para graficar
if not Data:
    print("No hay datos para generar el gráfico.")
    exit()

# Crear DataFrame y generar gráfico
df = pd.DataFrame(Data)
df.set_index("Pregunta", inplace=True)

plt.figure(figsize=(10, 6))
df["Percentatge d'encert"].plot(kind='bar', color='skyblue')
plt.title('Percentatge d\'encert per Pregunta')
plt.xlabel('Pregunta')
plt.ylabel('Percentatge d\'encert')
plt.xticks(rotation=45, ha='right')

# Ajustar el layout
plt.tight_layout()
plt.subplots_adjust(bottom=0.3)

# Guardar la imagen
plt.savefig(outputImagePath)
print(f"Gráfico guardado en: {outputImagePath}")
print(f"http://localhost:5000/images/18-10-2024/output.png")
