const fastapiService = require('../services/fastapiService');
const ollamaService = require('../services/ollamaService');

exports.consultar = async (req, res) => {
  const { query } = req.body;

  try {
    const resultados = await fastapiService.consultarVectores(query);
    const respuesta = await ollamaService.generarRespuesta(query, resultados);
    res.json({ respuesta });
  } catch (error) {
    console.error('Error al procesar la solicitud:', error.message);
    res.status(500).json({ error: 'Error al procesar la solicitud' });
  }
};
