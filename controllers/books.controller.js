const mongoose = require('mongoose');
const Book = require('../models/books.model.js');
const User = require('../models/users.model.js');

const createBook = async (req, res) => {
  try {
    const user = await Book.create(req.body);
    res.status(200).json(user);
    
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  }catch (error) {
   res.status(500).json({error: error.message}) 
  }
}

const deleteBook = async (req, res) => {
  try {
    console.log(req.body)
    const book = await Book.findByIdAndDelete(req.body.bookId);
    const user = await User.findByIdAndUpdate(req.body.userId, {$pull: {books: null}});
    res.status(200).json(book);
  }catch (error) {
    res.status(500).json({error: error.message})
  }
}

const getBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.status(200).json(book);
  }catch (error) {
    res.status(500).json({error: error.message})
  }
}

module.exports = {createBook, getBooks, deleteBook, getBook};