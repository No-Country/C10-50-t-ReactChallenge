const { Schema, model } = require("mongoose");

const ticketSchema = new Schema({
  name: {
    type: String,
  },
  image: {
    type: String,
  },
  category: {
    type: String,
  },
  price: {
    type: Number,
  },
  time: {
    type: Number,
  },
  description: {
    type: String,
  },
  available: {
    type: Boolean,
  },
});

module.exports = model("Ticket", ticketSchema);
