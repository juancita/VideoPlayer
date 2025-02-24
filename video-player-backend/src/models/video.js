const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const Video = sequelize.define("Video", {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  title: { type: DataTypes.STRING, allowNull: false },
  url: { type: DataTypes.STRING, allowNull: false },
  type: { type: DataTypes.ENUM("VT", "VBL", "BT"), allowNull: false },
});

module.exports = Video;
