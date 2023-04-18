const { Schema, model } = require("mongoose");
const Product = require("./Product");

const ticketSchema = new Schema({
  clientName: {
    type: String,
    default: "Client",
  },
  staff: {
    type: String,
    default: "Waiter",
  },
  table: {
    type: String,
    require: true,
  },
  totalPrice: {
    type: Number,
  },
  paymentMethod: {
    type: String,
    enum: ["cash", "card"],
    default: "cash",
  },
  order: {
    type: Array,
    default: [],
    ref: "Product",
  },
  status: {
    type: String,
    default: "ordered",
    enum: [
      "ordered",
      "rejected",
      "cooking",
      "ready progress",
      "in table",
      "payable",
    ],
  },
  date: {
    type: Date,
    default: new Date(),
  },
});

module.exports = model("Ticket", ticketSchema);
