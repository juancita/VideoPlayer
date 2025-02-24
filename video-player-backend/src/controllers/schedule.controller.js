const { Schedule, Videos, Banners } = require("../models"); // ✅ Importación correcta
const { Op } = require("sequelize");

// 📌 Crear una nueva programación
exports.createSchedule = async (req, res) => {
  try {
    const { videoId, bannerId, startTime, endTime } = req.body;

    if (!startTime || !endTime || (!videoId && !bannerId)) {
      return res.status(400).json({ message: "Se requiere un video o un banner y las horas de inicio y fin." });
    }

    const newSchedule = await Schedule.create({ videoId, bannerId, startTime, endTime });
    res.status(201).json(newSchedule);
  } catch (error) {
    res.status(500).json({ message: "Error al programar contenido", error });
  }
};

// 📌 Obtener todas las programaciones
exports.getSchedules = async (req, res) => {
  try {
    const schedules = await Schedule.findAll({
      include: [
        { model: Videos, as: "video" },
        { model: Banners, as: "banner" },
      ],
    });
    res.json(schedules);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener programaciones", error });
  }
};

// 📌 Obtener la programación actual (Detecta video y banner simultáneos)
exports.getCurrentSchedule = async (req, res) => {
  try {
    const now = new Date();

    // Buscar si hay un video programado en este momento
    const currentVideo = await Schedule.findOne({
      where: {
        startTime: { [Op.lte]: now },
        endTime: { [Op.gte]: now },
        videoId: { [Op.ne]: null }, // Solo registros con video
      },
      include: [{ model: Videos, as: "video" }],
    });

    // Buscar si hay un banner programado en este momento
    const currentBanner = await Schedule.findOne({
      where: {
        startTime: { [Op.lte]: now },
        endTime: { [Op.gte]: now },
        bannerId: { [Op.ne]: null }, // Solo registros con banner
      },
      include: [{ model: Banners, as: "banner" }],
    });

    if (!currentVideo && !currentBanner) {
      return res.json({
        status: "no-content",
        message: "No hay programación activa en este momento.",
      });
    }

    res.json({
      status: "success",
      video: currentVideo ? currentVideo.video : null,
      banner: currentBanner ? currentBanner.banner : null,
    });
  } catch (error) {
    console.error("Error al obtener la programación actual:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

// 📌 Obtener las próximas programaciones
exports.getUpcomingSchedules = async (req, res) => {
  try {
    const now = new Date();

    const upcomingSchedules = await Schedule.findAll({
      where: {
        startTime: { [Op.gt]: now }, // Solo futuras programaciones
      },
      order: [["startTime", "ASC"]],
      include: [
        { model: Videos, as: "video" },
        { model: Banners, as: "banner" },
      ],
    });

    res.json(upcomingSchedules);
  } catch (error) {
    console.error("Error al obtener próximas programaciones:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};
