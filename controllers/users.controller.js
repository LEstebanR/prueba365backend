const mongoose = require('mongoose');
const User = require('../models/users.model.js');
const Book = require('../models/books.model.js');

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json(user);
    
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const getUsers = async (req, res) => {
  try {
    const users = await User.find().sort({name: 1});
    res.status(200).json(users);
  }catch (error) {
   res.status(500).json({error: error.message}) 
  }
}

const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  }catch (error) {
   res.status(500).json({error: error.message}) 
  }
}

const updateUser = async (req, res) => {
  
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(user);
  }catch (error) {
    res.status(500).json({error: error.message})
  }
}

const deleteUser = async (req, res) => {
  console.log(req.body);
  try {
    const user = await User.findByIdAndDelete(req.body.userId);
    const book = await Book.findByIdAndUpdate(req.body.bookId,  {userName: "User deleted", userID : "" }, {new: true});
    res.status(200).json(user);
  }catch (error) {
    res.status(500).json({error: error.message})
  }
}

module.exports = {createUser, getUsers , getUser, updateUser, deleteUser};