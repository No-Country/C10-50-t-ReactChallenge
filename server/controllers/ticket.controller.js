const TicketService = require("../services/ticket.services");

class TicketController {
  static async getAllTickets(req, res) {
    const { data, error } = await TicketService.getAllTickets();
    if (error) {
      res.status(404).send(error._message);
    }
    res.status(200).send(data);
  }
}

module.exports = TicketController;