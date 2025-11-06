const router = require("express").Router();
const Service = require("../models/Service");
const auth = require("../middleware/auth");

// Crear servicio
router.post("/", auth, async (req, res) => {
  try {
    const service = new Service(req.body);
    await service.save();
    res.json(service);
  } catch (err) {
    res.status(500).json({ msg: "Error al crear servicio" });
  }
});

// Listar servicios
router.get("/", async (req, res) => {
  try {
    const list = await Service.find().sort({ createdAt: -1 });
    res.json(list);
  } catch (err) {
    res.status(500).json({ msg: "Error al obtener servicios" });
  }
});

// Editar
router.put("/:id", auth, async (req, res) => {
  try {
    const updated = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ msg: "Error al editar servicio" });
  }
});

// Eliminar
router.delete("/:id", auth, async (req, res) => {
  try {
    await Service.findByIdAndDelete(req.params.id);
    res.json({ msg: "Servicio eliminado" });
  } catch (err) {
    res.status(500).json({ msg: "Error al eliminar servicio" });
  }
});

module.exports = router;
