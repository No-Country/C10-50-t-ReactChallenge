const express = require("express");
const router = express.Router();
const menu = require("./product");
const staff = require("./staff");
const ticket = require("./ticket");
const bulk = require("./bulk");
const auth = require("./auth");
<<<<<<< HEAD
const admin = require("./admin");
const prueba = require("./prueba")
=======
>>>>>>> 83f2b168b6e797af216ded470c1217a3f6df5308

router.use("/menu", menu);
router.use("/staff", staff);
router.use("/ticket", ticket);
router.use("/bulk", bulk);
router.use("/auth", auth);
<<<<<<< HEAD
router.use("/admin", admin);
router.use("/prueba", prueba)
=======
>>>>>>> 83f2b168b6e797af216ded470c1217a3f6df5308

module.exports = router;
