const mongoose = require('mongoose');
const Loan = require('../models/loans.model.js');

const createLoan = async (req, res) => {
  try {
    const loan = await Loan.create(req.body);
    res.status(200).json(loan);
    
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const getLoans = async (req, res) => {
  try {
    const loans = await Loan.find();
    res.status(200).json(loans);
  }catch (error) {
   res.status(500).json({error: error.message}) 
  }
}

module.exports = {createLoan, getLoans};