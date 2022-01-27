const mongoose = require('mongoose');
const Book = require('../models/books.model.js');
const User = require('../models/users.model.js');

const loanBook = async (req, res) => {
  try {
    const  book = await Book.findByIdAndUpdate(req.body.bookID, {
      status: 'unavailable',
      userID: req.body.userID,
      userName: req.body.userName
    }, { new: true });

    const user = await User.findByIdAndUpdate(req.body.userID, {
      $push: { books: {bookID: req.body.bookID, bookName: req.body.bookName} }
    }, { new: true });

    res.status(200).json(book);
    
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { loanBook};