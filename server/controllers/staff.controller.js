const service = require("../services/product.services");

class StaffController {
  static async getStaff(req, res) {
    const { data, error } = await service.getAllStaff();
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

module.exports = StaffController;
