const mongoose = require('mongoose');

const loanSchema = mongoose.Schema(
  {
    bookID: {
      type: String,
    },
    userID: {
      type: String,
    },
    status: {
      type: Number,
    },

})

const Loan = mongoose.model('Loan', loanSchema);

module.exports = Loan;