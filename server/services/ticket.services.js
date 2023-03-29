const Ticket = require('../models/Ticket')

class TicketService {
    static async getAllTickets() {
        try {
            const ticket = await Ticket.find({})
            return {
                error: false,
                data: ticket
            }
        } catch (error) {
            return {
                error: true,
                data: error
            }
        }
    }
    

}

module.exports = TicketService