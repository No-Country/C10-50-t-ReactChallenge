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
    try {
      const newTicket = new Ticket(frontTicket);
      const saveTicket = await newTicket.save();
      return { data: saveTicket };
    } catch (error) {
      console.log(error);
      return { error };
    }
  }

  static async putTicket(body) {
    try {
      const ticket = await Ticket.find({ _id: body._id });
      const clientName = body.clientName !== "" ? body.clientName : ticket.clientName;
      const staff = body.staff !== "" ? body.staff : ticket.staff;
      const table = body.table !== "" ? body.table : ticket.table;
      const totalPrice = body.totalPrice !== "" ? body.totalPrice : ticket.totalPrice;
      const paymentMethod = body.paymentMethod !== "" ? body.paymentMethod : ticket.paymentMethod;
      const order = body.order !== "" ? body.order : ticket.order;
      const status = body.status !== "" ? body.status : ticket.order;

      const resp = await Ticket.findByIdAndUpdate(
        body._id,
        {
          $set: {
            clientName,
            staff,
            table,
            totalPrice,
            paymentMethod,
            order,
            status,
          },
        },
        { new: true }
      );

      return {
        error: false,
        data: resp,
      };
    } catch (error) {
      console.log(error);
      return { error };
    }
  }

  static async deleteTicket(id) {
    try {
      const resp = await Ticket.findByIdAndDelete({ _id: id });
      return {
        error: false,
        data: `Table ${resp.table} has been deleted`,
      };
    } catch (error) {
      console.log(error);
      return { error: true, data: error };
    }
  }
}

module.exports = TicketService;
