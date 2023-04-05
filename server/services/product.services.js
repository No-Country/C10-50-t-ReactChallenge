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

  static async createProduct(productBody) {
    try {
      const product = new Product(productBody);
      const resp = await product.save();
      return {
        error: false,
        data: resp
      }
    } catch (error) {
      console.log(error);
      return {
        error: true,
        data: error
      }
    }
  }

  static async editProduct(body) {
    try {
      const product = await Product.find({ _id: body._id });
      const name = body.name !== "" ? body.name : product.name;
      const image = body.image !== "" ? body.image : product.password;
      const category = body.category !== "" ? body.category : product.category
      const price = body.price !== "" ? body.price : product.price
      const time = body.time !== "" ? body.time : product.time
      const description = body.description !== "" ? body.description : product.description
      const available = body.available !== "" ? body.available : product.available

      const resp = await Product.findByIdAndUpdate(
        body.id,
        {
          $set: { name, image, category, price, time, description, available },
        },
        { new: true }
      );
      return {
        error: false,
        data: resp,
      };
    } catch (error) {
      console.log(error);
      return { data: error };
    }
  }

  static async deleteProduct(id) {
    try {
      const resp = await Product.findByIdAndDelete({ _id: id });
      return {
        error: false,
        data: `${resp.name} has been deleted`,
      };
    } catch (error) {
      console.log(error);
      return { error: true, data: error };
    }
  }

  static async deleteProduct(id) {
    try {
      const resp = await Product.findByIdAndDelete({ _id: id });
      return {
        error: false,
        data: `${resp.name} has been deleted`,
      };
    } catch (error) {
      console.log(error);
      return { error: true, data: error };
    }
  }

}

module.exports = ProductService;
