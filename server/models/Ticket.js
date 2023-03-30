const { Schema, model } = require("mongoose");

const ticketSchema = new Schema({
  clientName: {
    type: String,
    default: "Client",
  },
  staff: {
  type: String,
    default: 'Waiter'
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
  },
  order: {
    type: Array,
    default: [{}]
  },
  status: {
    type: String,
    enum: ["Requested", "Pending", "In progress", "Done", "Delivered"]
  },
  date: {
    type: Date,
    default: new Date(),
  },
});

module.exports = model("Ticket", ticketSchema);
