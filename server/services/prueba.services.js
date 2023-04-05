const Ticket = require("../models/Ticket")
const Product = require("../models/Product")


class PruebaServices {
    static async getPrueba(staff) {
        try {
            const prueba = await Ticket.findOne({ staff: staff }).populate("order");
            console.log("ESTO ES PRUEBA", prueba)
            return {
                error: false,
                data: prueba
            };
          } catch (error) {
            return { error: true, data: error };
          }
    }
}

module.exports = PruebaServices