const express = require('express');
const router = express.Router();
const Message = require('../models/Message');
const auth = require('../middleware/auth');

// Guardar mensaje (public)
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message)
      return res.status(400).json({ msg: 'Faltan datos' });

    const m = new Message({ name, email, message });
    await m.save();
    res.json({ msg: 'Mensaje guardado', message: m });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Error del servidor' });
  }
});

// Listar mensajes (solo admin)
router.get('/', auth, async (req, res) => {
  try {
    const msgs = await Message.find().sort({ createdAt: -1 });
    res.json(msgs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Error del servidor' });
  }
});

// ✅ Marcar como leído
router.put('/read/:id', auth, async (req, res) => {
  try {
    const msg = await Message.findByIdAndUpdate(
      req.params.id,
      { read: true },
      { new: true }
    );
    res.json(msg);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Error del servidor' });
  }
});

// ✅ Archivar mensaje
router.put('/archive/:id', auth, async (req, res) => {
  try {
    const msg = await Message.findByIdAndUpdate(
      req.params.id,
      { archived: true },
      { new: true }
    );
    res.json(msg);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Error del servidor' });
  }
});

// Eliminar mensaje
router.delete('/:id', auth, async (req, res) => {
  try {
    await Message.findByIdAndDelete(req.params.id);
    res.json({ msg: "Mensaje eliminado" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Error al eliminar mensaje" });
  }
});


module.exports = router;
