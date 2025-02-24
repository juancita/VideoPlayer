import React, { useState } from "react";
import { Button, Container, Typography } from "@mui/material";
import VideoUploadForm from "../components/VideoUploadForm";
import BannerUploadForm from "../components/BannerUploadForm";
import ScheduleForm from "../components/ScheduleForm";

const Dashboard = () => {
  const [view, setView] = useState("schedule"); // Por defecto mostramos "crear programación"

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Panel de Administración
      </Typography>

      {/* Botones para alternar vistas */}
      <Button variant="contained" onClick={() => setView("video")} style={{ marginRight: 10 }}>
        Cargar Video
      </Button>
      <Button variant="contained" onClick={() => setView("banner")} style={{ marginRight: 10 }}>
        Cargar Banner
      </Button>
      <Button variant="contained" onClick={() => setView("schedule")}>
        Crear Programación
      </Button>

      {/* Mostrar la vista según el botón seleccionado */}
      {view === "video" && <VideoUploadForm />}
      {view === "banner" && <BannerUploadForm />}
      {view === "schedule" && <ScheduleForm />}
    </Container>
  );
};

export default Dashboard;
