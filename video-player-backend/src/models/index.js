const { sequelize } = require("../config/database");
const Videos = require("./video");
const Banners = require("./banner");
const Schedule = require("./schedule");

// Verifica que Schedule solo tenga una relación con cada modelo
if (!Schedule.associations.video) {
  Schedule.belongsTo(Videos, { foreignKey: "videoId", as: "video" });
}

if (!Schedule.associations.banner) {
  Schedule.belongsTo(Banners, { foreignKey: "bannerId", as: "banner" });
}

module.exports = { sequelize, Videos, Banners, Schedule };
