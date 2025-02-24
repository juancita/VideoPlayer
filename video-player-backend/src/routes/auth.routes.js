const express = require("express");
const { register, login } = require("../controllers/auth.controller");

console.log("Funciones importadas:", { register, login }); // <-- Agrega esto para depurar

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

module.exports = router;
