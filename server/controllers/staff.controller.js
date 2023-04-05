const StaffService = require("../services/staff.services");

class StaffController {
  static async getStaff(req, res) {
    const { data, error } = await StaffService.getAllStaff();
    if (error) {
      res.status(404).send(error._message);
    }
    res.status(200).send(data);
  }
  
  
 
}

module.exports = StaffController;
