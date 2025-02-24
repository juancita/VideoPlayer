import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Container, TextField, Button, Typography, Paper, Box } from "@mui/material";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  //  Configurar la URL del backend (Docker o Local)
  const API_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_URL}/api/auth/register`, { username, password });
      alert("✅ Registro exitoso. Ahora puedes iniciar sesión.");
      navigate("/login");
    } catch (error) {
      console.error("❌ Error al registrar usuario:", error);
      alert("⚠️ No se pudo registrar el usuario. Intenta con otro nombre.");
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 5 }}>
        <Typography variant="h4" align="center" gutterBottom>
          📝 Registrarse
        </Typography>
        <form onSubmit={handleRegister}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              label="👤 Usuario"
              variant="outlined"
              fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <TextField
              label="🔑 Contraseña"
              variant="outlined"
              type="password"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button variant="contained" color="primary" type="submit">
              ✅ Registrarse
            </Button>
          </Box>
        </form>
        <Typography align="center" sx={{ mt: 2 }}>
          ¿Ya tienes cuenta? <a href="/login">🔐 Inicia sesión aquí</a>
        </Typography>
      </Paper>
    </Container>
  );
};

export default Register;
