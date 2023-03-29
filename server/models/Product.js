const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  name: {
    type: String,
  },
  image: {
    type: String,
  },
  category: {
    type: String,
    enum: ["Appetizers", "Main Dishes", "Drinks", "Desserts"],
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
  creationDate: {
    type: Date,
    default: new Date(),
  },
});

module.exports = model("Product", productSchema);
