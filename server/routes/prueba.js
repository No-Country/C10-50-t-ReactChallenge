const express = require("express");
const router = express.Router();
const PruebaController = require("../controllers/prueba.controller");

router.get("/", PruebaController.getPrueba);


module.exports = router;