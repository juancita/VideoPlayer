const express = require("express");
const { verifyToken } = require("../middlewares/auth.middleware");
const { createSchedule, getSchedules, getCurrentSchedule, getUpcomingSchedules } = require("../controllers/schedule.controller"); // ✅ Aquí agregamos la función faltante

const router = express.Router();

router.post("/create", verifyToken, createSchedule);
router.get("/", getSchedules);
router.get("/now", getCurrentSchedule);
router.get("/upcoming", getUpcomingSchedules); // ✅ Ahora sí está definido correctamente

module.exports = router;
