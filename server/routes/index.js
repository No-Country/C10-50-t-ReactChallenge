const express = require("express");
const router = express.Router();
const menu = require("./product");

router.use("/menu", menu);
// router.use("/stuff", staff);
// router.use("/ticket", ticket);

module.exports = router;
