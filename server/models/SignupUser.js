const { signupDB } = require('../config/db.connection');
const mongoose = require('mongoose');

const signupUserSchema = new mongoose.Schema({
  fn: { type: String, required: true },
  ln: { type: String, required: true },
  number: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  pwd: { type: String, required: true },
});

module.exports = signupDB.model('SignupUser', signupUserSchema);
