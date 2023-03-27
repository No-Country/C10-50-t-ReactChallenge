const express = require("express")
const router = express.Router()
const menu = require("./menu")

router.use("/menu", menu)


module.exports = router
