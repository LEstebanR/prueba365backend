const mongoose = require('mongoose');
const Book = require('../models/books.model.js');

const loanBook = async (req, res) => {

}

const getAvailablesBooks = async (req, res) => {
  try {
    const books = await Book.find({status: 'available'});
    res.status(200).json(books);
  }catch (error) {
   res.status(500).json({error: error.message}) 
  }
}

module.exports = {loanBook, getAvailablesBooks};