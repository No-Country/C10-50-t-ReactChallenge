
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
        const createProduct1 = new Product(productsToBulk[0])
        const createProduct2 = new Product(productsToBulk[1])
        const createProduct3 = new Product(productsToBulk[2])
        const createProduct4 = new Product(productsToBulk[3])
        const createProduct5 = new Product(productsToBulk[4])
        const createStaff1 = new Staff(staffsToBulk[0])
        const createStaff2 = new Staff(staffsToBulk[1])
        const createStaff3 = new Staff(staffsToBulk[2])
        const createStaff4 = new Staff(staffsToBulk[3])
        const createStaff5 = new Staff(staffsToBulk[4])
        const createTicket1 = new Ticket(ticketsToBulk[0]);
        const createTicket2 = new Ticket(ticketsToBulk[1]);

        const productData = await Product.insertMany([
          createProduct1,
          createProduct2,
          createProduct3,
          createProduct4,
          createProduct5
        ])

        const staffData = await Staff.insertMany([
          createStaff1,
          createStaff2,
          createStaff3,
          createStaff4,
          createStaff5
        ])

        const ticketData = await Ticket.insertMany([
          createTicket1,
          createTicket2,
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

