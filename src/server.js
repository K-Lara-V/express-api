const app = require('./app');
const { PORT } = require('./config');

app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});
