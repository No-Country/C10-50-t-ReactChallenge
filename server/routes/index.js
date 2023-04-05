const express = require("express");
const router = express.Router();
const menu = require("./product");
const staff = require("./staff");
const ticket = require("./ticket");
const bulk = require("./bulk");
const auth = require("./auth");

router.use("/menu", menu);
router.use("/staff", staff);
router.use("/ticket", ticket);
router.use("/bulk", bulk);
router.use("/auth", auth);

module.exports = router;