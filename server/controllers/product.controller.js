const service = require("../services/product.services");

class ProductController {
  static async getProducts(req, res) {
    const { data, error } = await service.getAllProducts();
    if (error) {
      res.status(404).send(error._message);
    }
    res.status(200).send(data);
  }
  //   static async getOneProduct(req, res) {
  //     const { data, error } = await service.getOneProduct();
  //     if (error) {
  //       res.status(404).send(error._message);
  //     }
  //     res.status(200).send(data);
  //   }
}

module.exports = ProductController;
