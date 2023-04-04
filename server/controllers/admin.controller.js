const AdminService = require("../services/admin.services");

class AdminController {
  static async createStaff(req, res) {
    const { data, error } = await AdminService.createStaff(req.body);
    if (error) {
      return res.status(404).send(error._message);
    }
    res.status(200).send(data);
  }

  static async editStaff(req, res) {
    const { data, error } = await AdminService.editStaff(req.params.id, req.body);
    if (error) {
      return res.status(404).send(error._message);
    }
    res.status(200).send(data);
  }
}

module.exports = AdminController;
