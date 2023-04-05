const express = require("express");
const router = express.Router();
const staffController = require("../controllers/staff.controller");

router.get("/", staffController.getStaff);
router.put("/", staffController.editStaff);
router.post("/", staffController.createStaff);
router.delete("/:id", staffController.deleteStaff);

module.exports = router;
