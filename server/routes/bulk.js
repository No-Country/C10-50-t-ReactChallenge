const express = require("express");
const router = express.Router();
const bulkController = require("../controllers/product.controller");

router.post("/", bulkController.bulk);

module.exports = router;
