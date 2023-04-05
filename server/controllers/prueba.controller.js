const PruebaService = require("../services/prueba.services");

class PruebaController {
  static async getPrueba(req, res) {
      const { data, error } = await PruebaService.getPrueba(req.body.staff)/* .populate("Product") */
    if (error) {
      res.status(404).send(error._message);
    }
    res.status(200).send(data);
  }
}

module.exports = PruebaController;
