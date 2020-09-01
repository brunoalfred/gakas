const bcrypt = require("bcrypt");
const mongoose = require('mongoose');

function setPassword(value) {
  return bcrypt.hashSync(value, 10);
}

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    set: setPassword,
  },
});



const model = mongoose.model("User", UserSchema);

module.exports = model;
