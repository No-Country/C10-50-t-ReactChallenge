const express = require("express");
const router = express.Router();
const menu = require("./product");
const staff = require("./staff");
const bulk = require("./bulk");

router.use("/menu", menu);
router.use("/staff", staff);
router.use("/bulk", bulk);
// router.use("/ticket", ticket);

module.exports = router;
