const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const Banner = sequelize.define("Banner", {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  title: { type: DataTypes.STRING, allowNull: false },
  imageUrl: { type: DataTypes.STRING, allowNull: true },
  text: { type: DataTypes.TEXT, allowNull: true },
  duration: { type: DataTypes.INTEGER, allowNull: false },
});

module.exports = Banner;
