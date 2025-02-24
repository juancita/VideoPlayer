import React, { useEffect, useState } from "react";
import axios from "axios";
import NoScheduleView from "../components/views/NoScheduleView";
import VideoView from "../components/views/VideoView";
import BannerView from "../components/views/BannerView";
import VideoBannerView from "../components/views/VideoBannerView";

const Home = () => {
  const [schedule, setSchedule] = useState(null);
  const [nextSchedules, setNextSchedules] = useState([]); // Aseguramos un array vacío
  const [loading, setLoading] = useState(true);

  // 📌 Configurar la URL del backend (Docker o Local)
  const API_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/schedule/now`);
        setSchedule(response.data);

        const upcomingResponse = await axios.get(`${API_URL}/api/schedule/upcoming`);
        setNextSchedules(upcomingResponse.data || []);
      } catch (error) {
        console.error("Error al obtener la programación:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSchedule();
    const interval = setInterval(fetchSchedule, 10000);
    return () => clearInterval(interval);
  }, []);

  if (loading) return <p>Cargando...</p>;

  if (!schedule || schedule.status === "no-content") return <NoScheduleView />;
  
  const { video, banner } = schedule;

  if (video && banner) {
    return <VideoBannerView video={video} banner={banner} nextSchedules={nextSchedules} />;
  } else if (video) {
    return <VideoView video={video} />;
  } else if (banner) {
    return <BannerView banner={banner} nextSchedules={nextSchedules} />;
  }

  return <NoScheduleView />;
};

export default Home;
