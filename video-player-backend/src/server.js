require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { sequelize } = require("./config/database");

// Asegúrate de que estás importando las rutas correctamente
const authRoutes = require("./routes/auth.routes");
const videoRoutes = require("./routes/video.routes");
const bannerRoutes = require("./routes/banner.routes");
const contentRoutes = require("./routes/content.routes");
const scheduleRoutes = require("./routes/schedule.routes");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use("/api/auth", authRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/banners", bannerRoutes);
app.use("/api/content", contentRoutes);
app.use("/api/schedule", scheduleRoutes);

// Conectar a la base de datos
sequelize.sync()
  .then(() => console.log("💾 Base de datos sincronizada"))
  .catch(err => console.error("❌ Error al conectar la BD:", err));

// Puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
