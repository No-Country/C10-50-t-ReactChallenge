const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/FoodTicket")
  .catch((err) => console.log(err));

mongoose.connection.on("open", (_) => {
  console.log("Database is conected to 27017");
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});
