const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Registro
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existe = await User.findOne({ email });
    if (existe) return res.json({ msg: "El usuario ya existe" });

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = new User({ name, email, password: hash });
    await user.save();

    res.json({ msg: "Usuario registrado correctamente" });
  } catch (err) {
    res.status(500).json({ msg: "Error en el servidor" });
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.json({ msg: "Correo incorrecto" });

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.json({ msg: "Contraseña incorrecta" });

    const token = jwt.sign(
      { id: user._id, name: user.name },
      process.env.JWT_SECRET,
      { expiresIn: "6h" }
    );

    res.json({
      msg: "Login exitoso",
      token,
      user: { name: user.name, email: user.email }
    });
  } catch (err) {
    res.status(500).json({ msg: "Error en el servidor" });
  }
});

module.exports = router;
