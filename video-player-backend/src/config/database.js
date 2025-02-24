const { Sequelize } = require("sequelize");
require("dotenv").config();

const DB_HOST = process.env.DB_HOST || "localhost"; //  Si no hay variable, usa localhost

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: DB_HOST,
    dialect: "postgres",
    logging: false,
  }
);

// Verificar conexión
sequelize.authenticate()
  .then(() => console.log(` Conectado a PostgreSQL en ${DB_HOST}`))
  .catch(err => console.error(" Error al conectar con PostgreSQL:", err));

module.exports = { sequelize };
