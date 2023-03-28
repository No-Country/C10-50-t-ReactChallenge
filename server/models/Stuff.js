const { Schema, model } = require("mongoose");

const stuffSchema = new Schema({
  mail: {
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

module.exports = model("Stuff", stuffSchema);
