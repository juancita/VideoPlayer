const express = require("express");
const { getAllContent } = require("../controllers/content.controller");

const router = express.Router();

router.get("/", getAllContent);

module.exports = router;
