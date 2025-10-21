// Servidor mínimo preparado para integraciones futuras.
// Por ahora NO intenta conectarse a una base de datos para evitar errores.
// Comentarios: aquí puedes añadir conexión a MongoDB cuando estés listo.
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/api/ping', (req, res) => {
  res.json({ ok: true, message: 'Backend Ardurra activo' });
});

const authRouter = require('./routes/auth');
app.use('/api/auth', authRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('Backend Ardurra ejecutándose en puerto', PORT);
});
