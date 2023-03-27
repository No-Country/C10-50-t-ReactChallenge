const express = require("express")
const router = express.Router()
const menucontroller = require("../controllers/menu.controller")

router.get("/", menucontroller)


module.exports = router