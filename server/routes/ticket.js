const express = require("express");
const router = express.Router();
const TicketController = require("../controllers/ticket.controller");

router.get("/", TicketController.getAllTickets);
router.post("/", TicketController.postTicket);
router.put("/", TicketController.putTicket);

module.exports = router;
