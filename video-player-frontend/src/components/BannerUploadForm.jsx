import React, { useState } from "react";
import { TextField, Button, Container } from "@mui/material";
import axios from "axios";

const BannerUploadForm = () => {
  const [bannerName, setBannerName] = useState("");
  const [bannerUrl, setBannerUrl] = useState("");
  const [bannerText, setBannerText] = useState("");
  const [duration, setDuration] = useState(10);

  const handleUpload = async () => {
    const token = localStorage.getItem("token");
  
    if (!token) {
      alert("Debes iniciar sesión para subir un banner.");
      return;
    }
  
    if (!bannerName || !duration || (!bannerUrl && !bannerText)) {
      alert("Debes ingresar el nombre, duración y al menos una URL de imagen o un texto.");
      return;
    }
  
    const bannerData = {
      title: bannerName,
      imageUrl: bannerUrl,
      text: bannerText,
      duration: Number(duration), // Asegurar que la duración sea un número
    };
  
    console.log("📌 Datos enviados:", bannerData); // <-- 🔍 Ver qué se está enviando
  
    try {
      await axios.post(
        "http://localhost:5000/api/banners/upload",
        bannerData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      alert("Banner subido correctamente.");
    } catch (error) {
      console.error("❌ Error al subir banner:", error.response?.data || error);
      alert("Hubo un error al subir el banner.");
    }
  };
  

  return (
    <Container>
      <h3>Subir Banner</h3>
      <TextField label="Nombre del banner" fullWidth onChange={(e) => setBannerName(e.target.value)} />
      <TextField label="URL de la imagen" fullWidth onChange={(e) => setBannerUrl(e.target.value)} style={{ marginTop: 10 }} />
      <TextField label="Texto del banner (opcional)" fullWidth onChange={(e) => setBannerText(e.target.value)} style={{ marginTop: 10 }} />
      <TextField label="Duración (segundos)" type="number" fullWidth onChange={(e) => setDuration(e.target.value)} style={{ marginTop: 10 }} />
      <Button variant="contained" onClick={handleUpload} style={{ marginTop: 10 }}>
        Subir Banner
      </Button>
    </Container>
  );
};

export default BannerUploadForm;
