const express = require("express");
const router = express.Router();
const menu = require("./product");
const staff = require("./staff");
const ticket = require("./ticket");
const bulk = require("./bulk");
const auth = require("./auth");
const admin = require("./admin");

router.use("/menu", menu);
router.use("/staff", staff);
router.use("/ticket", ticket);
router.use("/bulk", bulk);
router.use("/auth", auth);
router.use("/admin", admin);

module.exports = router;
