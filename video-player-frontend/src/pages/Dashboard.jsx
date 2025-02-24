import React, { useState } from "react";
import { Button, Container, Typography, Box } from "@mui/material";
import VideoUploadForm from "../components/VideoUploadForm";
import BannerUploadForm from "../components/BannerUploadForm";
import ScheduleForm from "../components/ScheduleForm";

const Dashboard = () => {
  const [view, setView] = useState("schedule"); // Por defecto mostramos "crear programación"

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        📌 Panel de Administración
      </Typography>

      {/* Botones para alternar vistas */}
      <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
        <Button variant="contained" color="primary" onClick={() => setView("video")}>
          🎬 Cargar Video
        </Button>
        <Button variant="contained" color="secondary" onClick={() => setView("banner")}>
          🖼️ Cargar Banner
        </Button>
        <Button variant="contained" color="success" onClick={() => setView("schedule")}>
          🕒 Crear Programación
        </Button>
      </Box>

      {/* Mostrar la vista según el botón seleccionado */}
      {view === "video" && <VideoUploadForm />}
      {view === "banner" && <BannerUploadForm />}
      {view === "schedule" && <ScheduleForm />}
    </Container>
  );
};

export default Dashboard;
