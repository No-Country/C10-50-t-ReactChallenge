const Staff = require("../models/Staff");

class AdminService {
  static async createStaff(userBody) {
    console.log("ES ADMIN SERVICE", userbody)
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
      const staff = await Staff.find({ _id: id });
      const name = body.name !== "" ? body.name : staff.name;
      const password = body.password !== "" ? body.password : staff.password;
      const image = body.image !== "" ? body.image : staff.image;
      const role = body.role !== "" ? body.role : staff.role;
      const available = body.available !== "" ? body.available : staff.available;

      const resp = await Staff.findByIdAndUpdate(
        id,
        {
          $set: { name, password, image, role, available },
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
        data: resp
      };
    } catch (error) {
      console.log(error);
      return { error: true, data: error}
    }
  }
}

module.exports = AdminService;
