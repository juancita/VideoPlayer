import { Container, Paper, Typography } from "@mui/material";
import ReactPlayer from "react-player";

const VideoView = ({ video }) => {
  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ p: 2, textAlign: "center" }}>
        <Typography variant="h5">{video.title}</Typography>
        <ReactPlayer
          url={video.url}
          playing
          width="100%"
          height="500px"
          controls={false}
        />
      </Paper>
    </Container>
  );
};

export default VideoView;
