const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, min: 0, max: 100 },
  status: { type: String, enum: ["active", "inactive", "pending"] },
});

module.exports = mongoose.model("User", userSchema);
