const express = require("express");
const router = express.Router();
const staffController = require("../controllers/staff.controller");

router.get("/", staffController.getStaff);
router.put("/", staffController.getStaff);
router.post("/", staffController.createStaff);


module.exports = router;
