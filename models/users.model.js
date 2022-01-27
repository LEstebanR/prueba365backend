
const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    tel: {
      type: Number,
    },
    books: []
})

const User = mongoose.model('User', userSchema);

module.exports = User;