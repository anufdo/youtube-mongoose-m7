const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, min: 0, max: 100 },
  status: { type: String, enum: ["active", "inactive", "pending"] },
  languages: { type: [String], required: true },
});

userSchema.methods.sayHi = function () {
  console.log("say hi from " + this.firstName);
};

userSchema.methods.fullName = function () {
  return this.firstName + " " + this.lastName;
};

userSchema.methods.isAbove = function (age) {
  return this.age >= age;
};

userSchema.statics.findByEmail = function (email) {
  return this.findOne({ email });
};

userSchema.statics.updateAllInactive = function (status) {
  return this.updateMany({ status }, { $set: { status: "inactive" } });
};

userSchema.query.byLastName = function (lastName) {
  return this.where({ lastName });
};

userSchema.query.byStatus = function (status) {
  return this.where({ status });
};

module.exports = mongoose.model("User", userSchema);
