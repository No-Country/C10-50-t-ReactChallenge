const Staff = require("../models/Staff");

class StaffService {
  static async getAllStaff() {
    try {
      const product = await Staff.find({});
      return { error: false, data: product };
    } catch (error) {
      return { error: true, data: error };
    }
  }
  static async getOneStaff(name) {
    try {
      const oneProduct = await Product.findOne({ name: name });
      return { error: false, data: oneProduct };
    } catch (error) {
      return { error: true, data: error };
    }
  }
}

module.exports = StaffService;