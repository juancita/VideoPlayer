const express = require("express");
const { verifyToken } = require("../middlewares/auth.middleware");
const {
  uploadBanner,
  getBanners,
  updateBanner,
  deleteBanner,
} = require("../controllers/banner.controller");

const router = express.Router();

router.post("/upload", verifyToken, uploadBanner);
router.get("/", getBanners);
router.put("/:id", verifyToken, updateBanner);
router.delete("/:id", verifyToken, deleteBanner);

module.exports = router;
