const Staff = require("../models/Staff");

class AuthController {
    
    static async logIn(req, res) {
        const userStaff = await Staff.findOne({ name: req.body.name })
        if (!userStaff) return res.sendStatus(401);
        if (userStaff.password === req.body.password) {
            res.status(201).send(userStaff)
        } else return res.sendStatus(401);
    }
}

module.exports = AuthController