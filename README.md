# express-api

express-api es una aplicación construida con Node.js y Express que actúa como intermediario entre una API de FastAPI y el modelo Mistral proporcionado por Ollama. Recibe consultas del usuario, obtiene vectores relevantes desde la API de FastAPI y utiliza el modelo Mistral para generar respuestas basadas en esos vectores.

## Caracteristicas
- Endpoint /consultar que acepta consultas del usuario.
- Obtiene vectores relevantes desde http://localhost:8001/query-vectors.
- Utiliza el modelo Mistral a través de Ollama para generar respuestas.
- Configuración flexible mediante variables de entorno.
- Contenerizado con Docker para facilitar la implementación.

## Requisitos
- Node.js v18 o superior
- Docker (opcional, para ejecución en contenedor)
- API de FastAPI en ejecución en http://localhost:8001/query-vectors
- Servicio de Ollama en ejecución en http://localhost:11434/api/generate

## Instalacion
    Clona este repositorio:
        git clone https://github.com/tu_usuario/express-api.git
        cd express-api

## Uso con Docker
    Construye la imagen de Docker:
        docker build -t express-api .
    Ejecuta el contenedor:
        docker run -d -p 3000:3000 --name express-api --env-file .env express-api

## Uso de la API
    Endpoint: /consultar
        Método: POST
        URL: http://localhost:3000/consultar
        Encabezados:
            Content-Type: application/json
        Cuerpo de la solicitud:
            {
                "query": "¿Qué es la inteligencia artificial?"
            }
        Respuesta exitosa:
            {
                "respuesta": "La inteligencia artificial es..."
            }


## Pruebas
-Puedes probar la API utilizando herramientas como Postman o curl:
    curl -X POST http://localhost:3000/consultar \
     -H "Content-Type: application/json" \
     -d '{"query": "¿Qué es la inteligencia artificial?"}'

## Licencia
- Este proyecto está licenciado bajo la MIT License.