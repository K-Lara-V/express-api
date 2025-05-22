const axios = require('axios');
const { OLLAMA_URL } = require('../config');

exports.generarRespuesta = async (query, resultados) => {
  const prompt = `Basado en los siguientes resultados: ${JSON.stringify(resultados)}, responde a la consulta: "${query}"`;

  const response = await axios.post(OLLAMA_URL, {
    model: 'mistral',
    prompt
  });

  return response.data.response;
};
