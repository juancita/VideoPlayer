const Banner = require("../models/banner");

//  Subir un nuevo banner
exports.uploadBanner = async (req, res) => {
  try {
    const { title, imageUrl, text, duration } = req.body;

    if (!title || !duration) {
      return res.status(400).json({ message: "El título y la duración son obligatorios." });
    }

    const newBanner = await Banner.create({ title, imageUrl, text, duration });
    res.status(201).json(newBanner);
  } catch (error) {
    console.error("Error al subir el banner:", error);
    res.status(500).json({ message: "Error al subir el banner", error });
  }
};

// Obtener todos los banners
exports.getBanners = async (req, res) => {
  try {
    const banners = await Banner.findAll();
    res.json(banners);
  } catch (error) {
    console.error("Error al obtener los banners:", error);
    res.status(500).json({ message: "Error al obtener los banners", error });
  }
};

// Actualizar un banner
exports.updateBanner = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, imageUrl, text, duration } = req.body;

    const banner = await Banner.findByPk(id);
    if (!banner) {
      return res.status(404).json({ message: "Banner no encontrado" });
    }

    await banner.update({ title, imageUrl, text, duration });
    res.json(banner);
  } catch (error) {
    console.error("Error al actualizar el banner:", error);
    res.status(500).json({ message: "Error al actualizar el banner", error });
  }
};

//  Eliminar un banner
exports.deleteBanner = async (req, res) => {
  try {
    const { id } = req.params;

    const banner = await Banner.findByPk(id);
    if (!banner) {
      return res.status(404).json({ message: "Banner no encontrado" });
    }

    await banner.destroy();
    res.json({ message: "Banner eliminado correctamente" });
  } catch (error) {
    console.error("Error al eliminar el banner:", error);
    res.status(500).json({ message: "Error al eliminar el banner", error });
  }
};
