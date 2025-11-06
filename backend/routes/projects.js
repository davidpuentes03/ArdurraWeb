const router = require("express").Router();
const Project = require("../models/Project");
const auth = require("../middleware/auth");

// Crear proyecto
router.post("/", auth, async (req, res) => {
  try {
    const p = new Project(req.body);
    await p.save();
    res.json(p);
  } catch (err) {
    res.status(500).json({ msg: "Error al crear proyecto" });
  }
});

// Listar proyectos
router.get("/", async (req, res) => {
  try {
    const list = await Project.find().sort({ createdAt: -1 });
    res.json(list);
  } catch (err) {
    res.status(500).json({ msg: "Error al obtener proyectos" });
  }
});

// Editar
router.put("/:id", auth, async (req, res) => {
  try {
    const updated = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ msg: "Error al editar proyecto" });
  }
});

// Eliminar
router.delete("/:id", auth, async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ msg: "Proyecto eliminado" });
  } catch (err) {
    res.status(500).json({ msg: "Error al eliminar proyecto" });
  }
});

module.exports = router;
