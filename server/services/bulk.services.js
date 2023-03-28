const Product = require("../models/Product");
const Staff = require("../models/Staff");
const Ticket = require("../models/Tiket");

class BulkService {
  static async bulk() {
    try {
      const products = [{}];
      const product = new Product({});
      const Staff = new Staff({});
      const Ticket = new Ticket({});

      const product = await Product.save({});
      const Staff = await Staff.save({});
      const Ticket = await Ticket.save({});
      return { error: false, data: product };
    } catch (error) {
      return { error: true, data: error };
    }
  }
}

module.exports = BulkService;
