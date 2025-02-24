const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
    logging: false, // Desactiva logs SQL
  }
);

// Verificar conexión
sequelize.authenticate()
  .then(() => console.log("✅ Conexión a PostgreSQL establecida"))
  .catch(err => console.error("❌ Error al conectar con PostgreSQL:", err));

module.exports = { sequelize };
