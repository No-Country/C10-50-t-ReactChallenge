const { productSchema } = require("../models/Product");
const { staffSchema } = require("../models/Staff");
const { ticketSchema } = require("../models/Ticket");
const productsToBulk = require("../utils/products");
const staffsToBulk = require("../utils/staffs");
const ticketsToBulk = require("../utils/tickets");
const { model } = require("mongoose");

class BulkService {
  static async getAllBulk() {
    const Product = new model("Product", productSchema);
    const Staff = new model("Staff", staffSchema);
    const Ticket = new model("Ticket", ticketSchema);

    const createBulk = async () => {
      try {
        const createProduct1 = new Product(productsToBulk[0]);
        const createProduct2 = new Product(productsToBulk[1]);
        const createProduct3 = new Product(productsToBulk[2]);
        const createProduct4 = new Product(productsToBulk[3]);
        const createProduct5 = new Product(productsToBulk[4]);
        const createProduct6 = new Product(productsToBulk[5]);
        const createProduct7 = new Product(productsToBulk[6]);
        const createProduct8 = new Product(productsToBulk[7]);
        const createProduct9 = new Product(productsToBulk[8]);
        const createProduct10 = new Product(productsToBulk[9]);
        const createProduct11 = new Product(productsToBulk[10]);
        const createProduct12 = new Product(productsToBulk[11]);
        const createProduct13 = new Product(productsToBulk[12]);
        const createProduct14 = new Product(productsToBulk[13]);
        const createProduct15 = new Product(productsToBulk[14]);
        const createStaff1 = new Staff(staffsToBulk[0]);
        const createStaff2 = new Staff(staffsToBulk[1]);
        const createStaff3 = new Staff(staffsToBulk[2]);
        const createStaff4 = new Staff(staffsToBulk[3]);
        const createStaff5 = new Staff(staffsToBulk[4]);
        const createTicket1 = new Ticket(ticketsToBulk[0]);
        const createTicket2 = new Ticket(ticketsToBulk[1]);
        const createTicket3 = new Ticket(ticketsToBulk[2]);
        const createTicket4 = new Ticket(ticketsToBulk[3]);

        const productData = await Product.insertMany([
          createProduct1,
          createProduct2,
          createProduct3,
          createProduct4,
          createProduct5,
          createProduct6,
          createProduct7,
          createProduct8,
          createProduct9,
          createProduct10,
          createProduct11,
          createProduct12,
          createProduct13,
          createProduct14,
          createProduct15,
        ]);

        const staffData = await Staff.insertMany([
          createStaff1,
          createStaff2,
          createStaff3,
          createStaff4,
          createStaff5,
        ]);

        const ticketData = await Ticket.insertMany([
          createTicket1,
          createTicket2,
          createTicket3,
          createTicket4,
        ]);

        console.log(productData, staffData, ticketData);
      } catch (error) {
        console.log(error);
      }
    };
    createBulk();
  }
}

module.exports = BulkService;
