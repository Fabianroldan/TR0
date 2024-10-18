import json
import random
import matplotlib.pyplot as plt
import os

preguntas_path = '../preguntas.json'
dades_path = 'dades.json'
images_dir = 'images'
estadisticas_dir = os.path.join(images_dir, 'estadisticas')

os.makedirs(images_dir, exist_ok=True)
os.makedirs(estadisticas_dir, exist_ok=True)

with open(preguntas_path, 'r', encoding='utf-8') as f:
    preguntas_data = json.load(f)

if os.path.exists(dades_path):
    with open(dades_path, 'r', encoding='utf-8') as f:
        dades_data = json.load(f)
else:
    dades_data = []

correctas = 0
incorrectas = 0
preguntas_procesadas = []

for pregunta in preguntas_data['preguntes'][:10]:
    id_pregunta = pregunta['id']
    texto_pregunta = pregunta['pregunta']
    
    opcion_elegida = random.choice(pregunta['opcions'])
    correcta = opcion_elegida['correcta']
    
    estadistica = next((p for p in dades_data if p['id'] == id_pregunta), None)
    
    if estadistica is None:
        estadistica = {
            "id": id_pregunta,
            "pregunta": texto_pregunta,
            "correctes": 0,
            "intents": 0
        }
        dades_data.append(estadistica)
    

    estadistica['intents'] += 1
    if correcta:
        estadistica['correctes'] += 1


    if correcta:
        correctas += 1
    else:
        incorrectas += 1


with open(dades_path, 'w', encoding='utf-8') as f:
    json.dump(dades_data, f, ensure_ascii=False, indent=4)


fig, ax = plt.subplots()
etiquetas = ['Correctas', 'Incorrectas']
valores = [correctas, incorrectas]
ax.bar(etiquetas, valores, color=['green', 'red'])
ax.set_ylabel('Número de respuestas')
ax.set_title('Resultados de Respuestas Aleatorias (10 preguntas)')

image_number = len(os.listdir(images_dir)) + 1
image_path = os.path.join(images_dir, f'graph_{image_number}.png')
plt.savefig(image_path)

preguntas = [pregunta['pregunta'] for pregunta in dades_data]
porcentajes_correctas = []
porcentajes_incorrectas = []

for pregunta in dades_data:
    total_intents = pregunta['intents']
    if total_intents > 0:
        correctas = pregunta['correctes']
        incorrectas = total_intents - correctas
        porcentaje_correcta = (correctas / total_intents) * 100
        porcentaje_incorrecta = (incorrectas / total_intents) * 100
    else:
        porcentaje_correcta = 0
        porcentaje_incorrecta = 0
    
    porcentajes_correctas.append(porcentaje_correcta)
    porcentajes_incorrectas.append(porcentaje_incorrecta)

fig, ax = plt.subplots(figsize=(10, 6))
x = range(len(preguntas))

ax.bar(x, porcentajes_correctas, width=0.4, label='Correctas', color='green', align='center')
ax.bar(x, porcentajes_incorrectas, width=0.4, label='Incorrectas', color='red', align='edge')

ax.set_ylabel('Porcentaje (%)')
ax.set_title('Porcentaje de Respuestas por Pregunta')
ax.set_xticks(x)
ax.set_xticklabels(preguntas, rotation=45, ha='right')
ax.legend()

image_number += 1 
image_path = os.path.join(estadisticas_dir, f'graph_respuestas_por_pregunta_{image_number}.png')
plt.tight_layout()
plt.savefig(image_path)

print(f"Gráfico de resultados guardado en: {image_path}")
