const axios = require('axios');
const { FASTAPI_URL } = require('../config');

exports.consultarVectores = async (query) => {
  const response = await axios.post(FASTAPI_URL, { query });
  return response.data;
};
