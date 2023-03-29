const service = require("../services/product.services");

class BulkController {
  static async bulk(req, res) {
    const { data, error } = await service.bulk();
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

module.exports = BulkController;
