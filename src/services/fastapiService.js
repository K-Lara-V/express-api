const axios = require('axios');
const { FASTAPI_URL } = require('../config');

exports.consultarVectores = async (query) => {
  console.log('FastAPI:', FASTAPI_URL);
  console.log('Query:', query);
  const response = await axios.post(FASTAPI_URL, {
  query,
  n_results: 3
});

  console.log('Response from FastAPI:', response.data);
  return response.data;
};
