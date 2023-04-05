const Ticket = require("../models/Ticket");

class TicketService {
  static async getAllTickets() {
    try {
      const ticket = await Ticket.find({});
      return {
        error: false,
        data: ticket,
      };
    } catch (error) {
      return {
        error: true,
        data: error,
      };
    }
  }

  static async postTicket(frontTicket) {
    console.log(frontTicket);
    try {
      const newTicket = new Ticket(frontTicket);
      const saveTicket = await newTicket.save();
      return { data: saveTicket };
    } catch (error) {
      console.log(error);
      return { error: true };
    }
  }
}

module.exports = TicketService;
