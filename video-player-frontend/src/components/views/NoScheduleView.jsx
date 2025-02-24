import { Container, Paper, Typography } from "@mui/material";

const NoScheduleView = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ p: 4, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          No hay programación activa
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Vuelve más tarde para ver contenido.
        </Typography>
      </Paper>
    </Container>
  );
};

export default NoScheduleView;
