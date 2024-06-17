const mongoose = require("mongoose");
const Car = require("../models/car.js")
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  fullName: String,
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  userType: { type: String, required: true },
  firstName: String,
  cars: [{ type: Schema.Types.ObjectId, ref: "Car"}],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
