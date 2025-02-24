const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,  // Agregar el puerto de la BD
    dialect: "postgres",
    logging: false, // Desactiva logs SQL
  }
);

// ✅ Verificar conexión con mejor manejo de errores
const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Conexión a PostgreSQL establecida");
  } catch (error) {
    console.error("❌ Error al conectar con PostgreSQL:", error);
  }
};

testConnection();

module.exports = { sequelize };
