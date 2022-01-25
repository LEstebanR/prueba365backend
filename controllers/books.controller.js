const mongoose = require('mongoose');
const Book = require('../models/books.model.js');

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
    const users = await Book.find();
    res.status(200).json(books);
  }catch (error) {
   res.status(500).json({error: e.message}) 
  }
}

module.exports = {createBook, getBooks};