const StaffService = require("../services/staff.services");

class StaffController {

  static async getStaff(req, res) {
    const { data, error } = await StaffService.getAllStaff();
    if (error) {
      res.status(404).send(error._message);
    }
    res.status(200).send(data);
  }

  static async createStaff(req, res) {
    const { data, error } = await StaffService.createStaff(req.body);
    if (error) {
      return res.status(404).send(error._message);
    }
    res.status(200).send(data);
  }

  static async editStaff(req, res) {
    const { data, error } = await StaffService.editStaff(req.body);
    if (error) {
      return res.status(404).send(error._message);
    }
    res.status(200).send(data);
  }

  static async deleteStaff(req, res) {
    const { id } = req.params;
    const { data, error } = await StaffService.deleteStaff(id);
    if (error) {
      return res.status(404).send(error._message);
    }
    res.send(data);
  }
}

module.exports = StaffController;
