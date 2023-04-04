const express = require("express")
const router = express.Router()
const AdminController = require("../controllers/admin.controller")

router.post("/staff", AdminController.createStaff)
router.put("/staff", AdminController.editStaff)

module.exports = router
