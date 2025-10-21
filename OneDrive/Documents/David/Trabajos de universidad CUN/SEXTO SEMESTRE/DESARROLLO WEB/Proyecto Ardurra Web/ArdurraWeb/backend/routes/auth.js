// Rutas de autenticación (esqueleto).
// Actualmente no guardan en BD; son funciones demostrativas.
const express = require('express');
const router = express.Router();

router.post('/register', (req, res) => {
  const { name, email } = req.body || {};
  return res.json({ user: { id: 'demo-id', name: name || 'Nombre', email: email || 'correo@ejemplo.com' } });
});

router.post('/login', (req, res) => {
  const { email } = req.body || {};
  return res.json({ user: { id: 'demo-id', name: 'Usuario Demo', email: email || 'correo@ejemplo.com' } });
});

module.exports = router;
