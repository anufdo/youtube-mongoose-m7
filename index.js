const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const User = require("./User");

// Connect to the database
mongoose.connect("mongodb://127.0.0.1/m7", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// list all users
async function listAll() {
  const users = await User.find();
  console.log(users);
}

listAll();
