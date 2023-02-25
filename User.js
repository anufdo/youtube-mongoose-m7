const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, min: 0, max: 100 },
  status: { type: String, enum: ["active", "inactive", "pending"] },
});

userSchema.methods.sayHi = function () {
  console.log("Hi");
};

module.exports = mongoose.model("User", userSchema);
