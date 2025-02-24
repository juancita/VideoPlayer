const Video = require("../models/video"); // Importamos el modelo de Video

// 🔹 Subir un nuevo video
exports.uploadVideo = async (req, res) => {
  try {
    const { title, url, type } = req.body;

    // Validamos que todos los campos sean obligatorios
    if (!title || !url || !type) {
      return res.status(400).json({ message: "Todos los campos son obligatorios." });
    }

    // Creamos el nuevo video en la base de datos
    const newVideo = await Video.create({ title, url, type });
    res.status(201).json(newVideo);
  } catch (error) {
    console.error("Error al subir el video:", error);
    res.status(500).json({ message: "Error al subir el video", error });
  }
};

// 🔹 Obtener todos los videos
exports.getVideos = async (req, res) => {
  try {
    const videos = await Video.findAll();
    res.json(videos);
  } catch (error) {
    console.error("Error al obtener los videos:", error);
    res.status(500).json({ message: "Error al obtener los videos", error });
  }
};

// 🔹 Actualizar un video por ID
exports.updateVideo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, url, type } = req.body;

    // Buscamos el video en la base de datos
    const video = await Video.findByPk(id);
    if (!video) {
      return res.status(404).json({ message: "Video no encontrado" });
    }

    // Actualizamos los datos del video
    await video.update({ title, url, type });
    res.json(video);
  } catch (error) {
    console.error("Error al actualizar el video:", error);
    res.status(500).json({ message: "Error al actualizar el video", error });
  }
};

// 🔹 Eliminar un video por ID
exports.deleteVideo = async (req, res) => {
  try {
    const { id } = req.params;

    // Buscamos el video en la base de datos
    const video = await Video.findByPk(id);
    if (!video) {
      return res.status(404).json({ message: "Video no encontrado" });
    }

    // Eliminamos el video
    await video.destroy();
    res.json({ message: "Video eliminado correctamente" });
  } catch (error) {
    console.error("Error al eliminar el video:", error);
    res.status(500).json({ message: "Error al eliminar el video", error });
  }
};
