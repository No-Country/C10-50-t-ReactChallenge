const ProductService = require("../services/product.services");

class ProductController {
  static async getProducts(req, res) {
    const { data, error } = await ProductService.getAllProducts();
    if (error) {
      res.status(404).send(error._message);
    }
    res.status(200).send(data);
  }

  static async createProduct(req, res) {
    const { data, error } = await ProductService.createProduct(req.body);
    if (error) {
      return res.status(404).send(error._message);
    }
    res.status(200).send(data);
  }

  static async editProduct(req, res) {
    const { data, error } = await ProductService.editProduct(req.body);
    if (error) {
      return res.status(404).send(error._message);
    }
    res.status(200).send(data);
  }

  static async deleteProduct(req, res) {
    const { data, error } = await ProductService.deleteProduct(req.params.id);
    if (error) {
      return res.status(404).send(error._message);
    }
    res.status(200).send(data);
  }

}

module.exports = ProductController;
