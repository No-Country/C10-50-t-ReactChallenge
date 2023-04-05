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

  static async editStaff(body) {
    try {
      const staff = await Staff.find({ _id: body._id });
      const name = body.name !== "" ? body.name : staff.name;
      const password = body.password !== "" ? body.password : staff.password;
      const image = body.image !== "" ? body.image : staff.image;
      const tables = body.tables !== "" ? body.tables : staff.tables;
      const role = body.role !== "" ? body.role : staff.role;
      const available =
        body.available !== "" ? body.available : staff.available;

      const resp = await Staff.findByIdAndUpdate(
        body._id,
        {
          $set: { name, password, image, role, tables, available },
        },
        { new: true }
      );

      return {
        error: false,
        data: resp,
      };
    } catch (error) {
      console.log(error);
      return { data: error };
    }
  }

  static async deleteUser(id) {
    try {
      const resp = await Staff.findByIdAndDelete({ _id: id });
      return {
        error: false,
        data: `${resp.name} has been deleted`,
      };
    } catch (error) {
      console.log(error);
      return { error: true, data: error };
    }
  }
}

module.exports = StaffService;
