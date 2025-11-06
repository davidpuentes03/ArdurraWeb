require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Rutas (solo auth por ahora)
app.use("/api/auth", require("./routes/auth"));
app.use("/api/messages", require("./routes/Message"));

// Conexión a MongoDB Atlas
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB conectado"))
  .catch((err) => console.error(" Error en MongoDB:", err));

// Iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));

app.use("/api/services", require("./routes/services"));
app.use("/api/projects", require("./routes/projects"));
app.use("/api/messages", require("./routes/Message"));
