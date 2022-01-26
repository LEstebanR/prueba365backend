const mongoose = require('mongoose');
const Book = require('../models/books.model.js');

const receiveBook = async (req, res) => {

}

const getUnavailablesBooks = async (req, res) => {
  try {
    const books = await Book.find({status: 'unavailable'});
    res.status(200).json(books);
  }catch (error) {
   res.status(500).json({error: error.message}) 
  }
}

module.exports = {receiveBook, getUnavailablesBooks};