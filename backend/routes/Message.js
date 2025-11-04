const express = require('express');
const router = express.Router();
const Message = require('../models/Message');
const auth = require('../middleware/auth');

// Guardar mensaje (public)
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !message) return res.status(400).json({ msg: 'Faltan datos' });

    const m = new Message({ name, email, subject, message });
    await m.save();
    res.json({ msg: 'Mensaje guardado', message: m });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Error del servidor' });
  }
});

// Listar mensajes (protegido, solo admin o dev)
router.get('/', auth, async (req, res) => {
  try {
    const msgs = await Message.find().sort({ createdAt: -1 });
    res.json(msgs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Error del servidor' });
  }
});

module.exports = router;
