const { Schema, model } = require("mongoose");
const Product = require("./Product")

const ticketSchema = new Schema({
  clientName: {
    type: String,
    default: "Client",
  },
  staff: {
    type: String,
<<<<<<< HEAD
    default: "Waiter"
=======
    default: "Waiter",
>>>>>>> 83f2b168b6e797af216ded470c1217a3f6df5308
  },
  table: {
    type: Number,
  },
  totalPrice: {
    type: Number,
  },
  paymentMethod: {
    type: String,
    enum: ["cash", "card"],
    default: "cash"
  },
  order: {
    type: Array,
<<<<<<< HEAD
    default: [{}],
    ref: "Product"
=======
    default: [],
>>>>>>> 83f2b168b6e797af216ded470c1217a3f6df5308
  },
  status: {
    type: String,
    enum: ["Requested", "Pending", "In progress", "Done", "Delivered"],
  },
  date: {
    type: Date,
    default: new Date(),
  },
});

module.exports = model("Ticket", ticketSchema);
