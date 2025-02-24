const express = require("express");
const { verifyToken } = require("../middlewares/auth.middleware");
const { uploadVideo, getVideos, updateVideo, deleteVideo } = require("../controllers/video.controller");

const router = express.Router();

router.post("/upload", verifyToken, uploadVideo);
router.get("/", getVideos);
router.put("/:id", verifyToken, updateVideo);
router.delete("/:id", verifyToken, deleteVideo);

module.exports = router;
