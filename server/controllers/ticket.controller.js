const TicketService = require("../services/ticket.services");

class TicketController {
  static async getAllTickets(req, res) {
    const { data, error } = await TicketService.getAllTickets();
    if (error) {
      res.status(404).send(error._message);
    }
    res.status(200).send(data);
  }

  static async postTicket(req, res) {
    const newTicket = req.body;
    const { data, error } = await TicketService.postTicket(newTicket);
    if (error) {
      res.status(400).send(error._message);
    }
    res.status(200).send(data);
  }

  static async putTicket(req, res) {
    const { data, error } = await TicketService.putTicket(req.body);
    if (error) {
      return res.status(400).send(error._message);
    }
    res.status(200).send(data);
  }
}

module.exports = TicketController;
