const { Schema, model } = require("mongoose");

const stuffSchema = new Schema({

  username: {
    type: String,
    requiere: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    default:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fes%2Fvectors%2Ffoto-de-perfil-en-blanco-973460%2F&psig=AOvVaw3B_YtI7Kz07L4uW1De3FA9&ust=1680119479650000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCMjv-POy__0CFQAAAAAdAAAAABAE",
  },
  name: {
    type: String,
  },
  adminRole: {
    type: Boolean,
  },
  kitchenRole: {
    type: Boolean,
  },
  adminRole: {
    type: Boolean,
  },
  available: {
    type: Boolean,
  },
  creationDate: {
    type: Date,
    default: new Date(),
  },
});

module.exports = model("Staff", staffSchema);

