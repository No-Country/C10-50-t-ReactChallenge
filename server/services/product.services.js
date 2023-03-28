const Product = require("../models/Product");

class ProductService {
  static async getAllProducts() {
    try {
      const product = await Product.find({});
      return { error: false, data: product };
    } catch (error) {
      return { error: true, data: error };
    }
  }
  static async getOneProduct(name) {
    try {
      const oneProduct = await Product.findOne({ name: name });
      return { error: false, data: oneProduct };
    } catch (error) {
      return { error: true, data: error };
    }
  }
}

module.exports = ProductService;
