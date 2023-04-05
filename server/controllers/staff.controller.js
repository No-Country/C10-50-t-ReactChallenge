const StaffService = require("../services/staff.services");

class StaffController {
  static async getStaff(req, res) {
    const { data, error } = await StaffService.getAllStaff();
    if (error) {
      res.status(404).send(error._message);
    }
    res.status(200).send(data);
  }
<<<<<<< HEAD
  
  
 
=======

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
    console.log(id);
    const { data, error } = await StaffService.deleteUser(id);
    if (error) {
      return res.status(404).send(error._message);
    }
    res.send(data);
  }
>>>>>>> 83f2b168b6e797af216ded470c1217a3f6df5308
}

module.exports = StaffController;
