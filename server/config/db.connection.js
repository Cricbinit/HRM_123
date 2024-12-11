const mongoose = require('mongoose');

// Connect to Signup Database
const signupDB = mongoose.createConnection('mongodb://localhost:27017/signupDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Connect to Login Database
const loginDB = mongoose.createConnection('mongodb://localhost:27017/loginDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

signupDB.on('connected', () => console.log('Connected to Signup Database'));
loginDB.on('connected', () => console.log('Connected to Login Database'));

module.exports = { signupDB, loginDB };
