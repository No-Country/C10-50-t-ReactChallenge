const express = require("express");
const router = express.Router();
const stuffController = require("../controllers/staff.controller");

router.get("/", stuffController.getStaff);
router.put("/", stuffController.getStaff);

module.exports = router;
