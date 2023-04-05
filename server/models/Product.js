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
  ticket: {
    type: Number,
    ref: "Ticket"
  },
  creationDate: {
    type: Date,
    default: new Date(),
  },
});

// const Product = new model("Product", productSchema)

// const createProducts = async () => {
//   try {
//     const createProduct = new Product({

//     })

//     const productData = await createProduct.save()
//     console.log(productData)
//   } catch (error) {
//     console.log(error.message)
//   }

// }
// createProducts()

module.exports = model("Product", productSchema);
