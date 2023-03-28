const mongoose = require("mongoose");
mongoose
  .connect(process.env.URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .catch((err) => console.log(err));

mongoose.connection.on("open", (_) => {
  console.log("Database is conected to MongoDB Cloud");
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});
