const mongoose = require("mongoose");

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
});

const User = mongoose.model("User", userSchema);

module.exports = User;
