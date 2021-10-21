const {model, Schema} = require("mongoose");

const userSchema = new Schema({
  name: String,
  lastname: String,
  email: String,
  password: String
});

const userModel = model("users", userSchema);

module.exports = userModel;