const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const User = sequelize.define(
  "User",
  {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    username: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.STRING, defaultValue: "admin" }, // admin o usuario normal
  },
  {
    timestamps: false, // 🚨 Esto evita que Sequelize espere `createdAt` y `updatedAt`
  }
);

module.exports = User;
