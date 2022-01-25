const mongoose = require('mongoose');

const booksSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    author: {
      type: String,
    }
    
})

const Book = mongoose.model('Book', booksSchema);

module.exports = Book;