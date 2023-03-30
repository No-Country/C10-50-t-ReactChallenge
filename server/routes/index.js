const express = require("express");
const router = express.Router();
const menu = require("./product");
const staff = require("./staff");
const ticket = require("./ticket")
const bulk = require("./bulk")

router.use("/menu", menu);
router.use("/staff", staff);
router.use("/ticket", ticket);

router.use("/bulk", bulk)

module.exports = router;
