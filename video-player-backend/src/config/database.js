const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,  // Asegurar que se está usando el puerto
    dialect: "postgres",
    logging: false, // Desactiva logs SQL
  }
);

// ✅ Intentar la conexión varias veces antes de fallar
const connectWithRetry = async (retries = 5, delay = 5000) => {
  for (let i = 0; i < retries; i++) {
    try {
      await sequelize.authenticate();
      console.log("✅ Conexión a PostgreSQL establecida");
      return;
    } catch (error) {
      console.error(`❌ Intento ${i + 1} de conexión fallido. Retrying in ${delay / 1000} seconds...`);
      await new Promise(res => setTimeout(res, delay));
    }
  }
  console.error("❌ No se pudo conectar a PostgreSQL después de varios intentos.");
  process.exit(1);
};

connectWithRetry(); // Llamar a la función de conexión

module.exports = { sequelize };
