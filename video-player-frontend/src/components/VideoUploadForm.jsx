import React, { useState } from "react";
import { TextField, Button, Container } from "@mui/material";
import axios from "axios";

const VideoUploadForm = () => {
  const [videoName, setVideoName] = useState("");
  const [videoUrl, setVideoUrl] = useState("");

  // 📌 Configurar la URL del backend (Docker o Local)
  const API_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

  const handleUpload = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Debes iniciar sesión para subir un video.");
      return;
    }

    if (!videoName || !videoUrl) {
      alert("Debes ingresar el nombre y la URL del video.");
      return;
    }

    try {
      await axios.post(
        `${API_URL}/api/videos/upload`, // 🔹 Ahora funciona en cualquier entorno
        { title: videoName, url: videoUrl, type: "VT" }, // 👈 `title` es el correcto
        { headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" } }
      );      
      alert("✅ Video subido correctamente.");
    } catch (error) {
      console.error("❌ Error al subir video:", error);
      alert("Hubo un error al subir el video.");
    }
  };

  return (
    <Container>
      <h3>🎬 Subir Video</h3>
      <TextField 
        label="Nombre del video" 
        fullWidth 
        value={videoName} 
        onChange={(e) => setVideoName(e.target.value)} 
      />
      <TextField 
        label="URL del video" 
        fullWidth 
        value={videoUrl} 
        onChange={(e) => setVideoUrl(e.target.value)} 
        style={{ marginTop: 10 }} 
      />
      <Button 
        variant="contained" 
        onClick={handleUpload} 
        style={{ marginTop: 10 }}>
        🚀 Subir Video
      </Button>
    </Container>
  );
};

export default VideoUploadForm;
