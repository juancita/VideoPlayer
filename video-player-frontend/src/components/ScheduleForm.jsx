import React, { useState, useEffect } from "react";
import { TextField, Button, Select, MenuItem, Container, FormControl, InputLabel } from "@mui/material";
import axios from "axios";

const ScheduleForm = () => {
  const [videos, setVideos] = useState([]);
  const [banners, setBanners] = useState([]);
  const [contentId, setContentId] = useState(""); // Asegurar que empiece vacío
  const [contentType, setContentType] = useState("video");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const videoRes = await axios.get("http://localhost:5000/api/videos");
        const bannerRes = await axios.get("http://localhost:5000/api/banners");
        
        setVideos(videoRes.data || []);
        setBanners(bannerRes.data || []);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };
    fetchData();
  }, []);

  const handleSchedule = async () => {
    const token = localStorage.getItem("token");
  
    if (!token) {
      alert("Debes iniciar sesión para programar contenido.");
      return;
    }
  
    // Convertimos contentId al formato que espera el backend
    const requestData = {
      startTime,
      endTime,
      videoId: contentType === "video" ? contentId : null,
      bannerId: contentType === "banner" ? contentId : null,
    };
  
    console.log("Datos enviados:", requestData); // <-- Verifica que sean correctos
  
    try {
      const response = await axios.post(
        "http://localhost:5000/api/schedule/create",
        requestData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
  
      alert("Programación creada con éxito!");
    } catch (error) {
      console.error("Error al programar contenido:", error.response?.data || error);
      alert("Hubo un error al programar el contenido.");
    }
  };
  
  

  return (
    <Container>
      <h2>Programar Contenido</h2>

      {/* Selección de tipo de contenido */}
      <FormControl fullWidth>
        <InputLabel>Tipo de Contenido</InputLabel>
        <Select value={contentType} onChange={(e) => {
          setContentType(e.target.value);
          setContentId(""); // Reiniciar selección
        }}>
          <MenuItem value="video">Video</MenuItem>
          <MenuItem value="banner">Banner</MenuItem>
        </Select>
      </FormControl>

      {/* Selección del contenido específico */}
      <FormControl fullWidth>
  <InputLabel>Seleccionar Contenido</InputLabel>
  <Select value={contentId || ""} onChange={(e) => setContentId(e.target.value)}>
    {(contentType === "video" ? videos : banners).map((item, index) => (
      <MenuItem key={item._id || item.id || index} value={item._id || item.id}>
        {item.title}
      </MenuItem>
    ))}
  </Select>
</FormControl>


      {/* Campos de tiempo */}
      <TextField
        label="Hora de Inicio"
        type="datetime-local"
        fullWidth
        value={startTime}
        onChange={(e) => setStartTime(e.target.value)}
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        label="Hora de Fin"
        type="datetime-local"
        fullWidth
        value={endTime}
        onChange={(e) => setEndTime(e.target.value)}
        InputLabelProps={{ shrink: true }}
      />

      {/* Botón de programación */}
      <Button variant="contained" color="primary" onClick={handleSchedule}>
        PROGRAMAR
      </Button>
    </Container>
  );
};

export default ScheduleForm;
