const e = require('express');
const mongoose = require('mongoose');
const User = require('../models/users.model.js');

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
    const users = await User.find();
    res.status(200).json(users);
  }catch (error) {
   res.status(500).json({error: e.message}) 
  }
}

module.exports = {createUser, getUsers};