const express = require("express");
const Controller = require("../controllers/loans.controller.js")

const app = express.Router();

app.post('/loans', Controller.createLoan);
app.get('/loans', Controller.getLoans);

module.exports = app;