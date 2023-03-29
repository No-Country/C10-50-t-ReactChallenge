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
  TotalPrice: {
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
  },
  Date: {
    type: Date,
    default: new Date(),
  },
});

module.exports = model("Ticket", ticketSchema);
