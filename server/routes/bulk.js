const express = require("express");
const router = express.Router();
const BulkService = require("../services/bulk.services");

router.get("/", BulkService.getAllBulk);

module.exports = router;