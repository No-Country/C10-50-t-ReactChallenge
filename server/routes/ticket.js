const express = require("express");
const router = express.Router();
const TicketsController = require("../controllers/tickets.controller");

router.get("/", TicketsController);

module.exports = router;
