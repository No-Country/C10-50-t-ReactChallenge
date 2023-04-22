const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  name: {
    type: String,
  },
  image: {
    type: String,
    default:
      "https://www.yanaya.co.zw/wp-content/uploads/2020/08/79-798754_hoteles-y-centros-vacacionales-dish-placeholder-hd-png.jpg",
  },
  category: {
    type: String,
    enum: ["Appetizers", "MainDishes", "Drinks", "Desserts"],
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
