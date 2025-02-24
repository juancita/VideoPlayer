const jwt = require("jsonwebtoken");

exports.verifyToken = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "Acceso denegado. No hay token." });
  }

  try {
    const verified = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET);
    req.user = verified;
    console.log("Usuario autenticado:", verified); // <-- Agrega esto para depuración
    next();
  } catch (err) {
    console.error("Error verificando token:", err); // <-- Log para ver el error
    return res.status(400).json({ message: "Token inválido." });
  }
};
