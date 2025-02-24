const Video = require("../models/video");
const Banner = require("../models/banner");

exports.getAllContent = async (req, res) => {
  try {
    const videos = await Video.findAll();
    const banners = await Banner.findAll();
    res.json({ videos, banners });
  } catch (error) {
    res.status(500).json({ message: "Error al obtener contenido", error });
  }
};
