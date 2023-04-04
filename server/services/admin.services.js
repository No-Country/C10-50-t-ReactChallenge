const Staff = require("../models/Staff");

class AdminService {
  static async createStaff(userBody) {
    try {
      const staff = new Staff(userBody);
      const resp = await staff.save();
      return {
        error: false,
        data: resp,
      };
    } catch (error) {
      console.log(error);
      return { error: true, data: error };
    }
  }

  static async editStaff(id, body) {
    try {
      const resp = await Staff.findByIdAndUpdate(id, {
        $addToSet: {
          name: body.name,
          password

        }
      })
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = AdminService;
