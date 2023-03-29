const express = require("express");
const router = express.Router();
const menu = require("./product");
const staff = require("./staff");
const ticket = require("./ticket")

router.use("/menu", menu);
router.use("/staff", staff);
router.use("/ticket", ticket);

module.exports = router;
