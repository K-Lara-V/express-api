require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 3000,
  FASTAPI_URL: process.env.FASTAPI_URL,
  OLLAMA_URL: process.env.OLLAMA_URL
};
