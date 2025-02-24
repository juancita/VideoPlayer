import { Container, Paper, Typography } from "@mui/material";

const BannerView = ({ banner }) => {
  // URL por defecto si no hay imagen
  const defaultImage = "https://via.placeholder.com/600x300?text=No+Image+Available";
  
  // Verifica si la imagen es válida
  const imageUrl = banner.imageUrl?.startsWith("http") ? banner.imageUrl : defaultImage;

  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ p: 2, textAlign: "center" }}>
        <img
          src={imageUrl}
          alt={banner.title}
          style={{ width: "100%", maxHeight: "500px", objectFit: "cover" }}
          onError={(e) => { e.target.src = defaultImage; }} 
        />
        <Typography variant="h5">{banner.title}</Typography>
        <Typography variant="body2">{banner.text}</Typography>
      </Paper>
    </Container>
  );
};

export default BannerView;
