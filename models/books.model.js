const mongoose = require('mongoose');

const booksSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    author: {
      type: String,
    },
    status:{
      type: String,
      default: 'available'

    },
    userID:{
      type: String,
      default: ""
    }
    
})

const Book = mongoose.model('Book', booksSchema);

module.exports = Book;