const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");
const Videos = require("./video");
const Banners = require("./banner");

const Schedule = sequelize.define("Schedule", {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  startTime: { type: DataTypes.DATE, allowNull: false },
  endTime: { type: DataTypes.DATE, allowNull: false },
  videoId: { type: DataTypes.UUID, allowNull: true },  
  bannerId: { type: DataTypes.UUID, allowNull: true }
});

// Relacionar con Videos y Banners
Schedule.belongsTo(Videos, { foreignKey: "videoId", as: "video" });
Schedule.belongsTo(Banners, { foreignKey: "bannerId", as: "banner" });

module.exports = Schedule;
