import { Container, Paper, Typography, Grid } from "@mui/material";
import ReactPlayer from "react-player";

const VideoBannerView = ({ video, banner, nextSchedules = [] }) => {
  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Grid container spacing={2}>
        {/* 📌 Video (65%) */}
        <Grid item xs={8}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h5">{video.title}</Typography>
            <ReactPlayer
              url={video.url}
              playing
              width="100%"
              height="400px"
              controls={false}
            />
          </Paper>
        </Grid>

        {/* 📌 Banner + Lista de Programación (35%) */}
        <Grid item xs={4}>
          <Paper elevation={3} sx={{ p: 2, textAlign: "center" }}>
            <img
              src={banner.imageUrl}
              alt={banner.title}
              style={{ width: "100%", maxHeight: "400px", objectFit: "cover" }}
            />
            <Typography variant="h6">{banner.title}</Typography>
            <Typography variant="body2">{banner.text}</Typography>
          </Paper>

          {/* Lista de próximas programaciones */}
          <Paper elevation={3} sx={{ p: 2, mt: 2 }}>
            <Typography variant="h6">Próximas programaciones</Typography>
            {nextSchedules.length > 0 ? (
              nextSchedules.map((item, index) => (
                <Typography key={index} variant="body1">
                  {item.video ? `🎬 Video: ${item.video.title}` : `🖼️ Banner: ${item.banner.title}`} - 
                  {new Date(item.startTime).toLocaleTimeString()}
                </Typography>
              ))
            ) : (
              <Typography variant="body1" color="textSecondary">
                No hay programaciones futuras en este momento.
              </Typography>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default VideoBannerView;
