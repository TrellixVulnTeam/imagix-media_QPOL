const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    min: 3,
    required: [true, "Username is required"],
  },
  password: {
    type: String,
    min: 5,
    required: [true, "Password is Required"],
  },
});

module.exports = mongoose.model("users", userSchema);
