const axios = require('axios');
const { OLLAMA_URL } = require('../config');

exports.generarRespuesta = async (query, resultados) => {
  const prompt = `Basado en los siguientes resultados: ${JSON.stringify(resultados)}, responde a la consulta: "${query}"`;

  const response = await axios.post(OLLAMA_URL, {
    model: 'mistral',
    prompt,
    stream: true
  }, {
    responseType: 'stream'
  });

  let fullResponse = '';

  return new Promise((resolve, reject) => {
    response.data.on('data', chunk => {
      try {
        // Cada línea puede ser un JSON
        const lines = chunk.toString().split('\n').filter(Boolean);
        for (const line of lines) {
          const parsed = JSON.parse(line);
          fullResponse += parsed.response || '';
        }
      } catch (err) {
        reject(`Error parsing chunk: ${err.message}`);
      }
    });

    response.data.on('end', () => {
      console.log('Respuesta completa desde Ollama:', fullResponse);
      resolve(fullResponse);
    });

    response.data.on('error', err => {
      reject(`Error en el stream de Ollama: ${err.message}`);
    });
  });
};