const express = require("express");
const Controller = require("../controllers/loans.controller.js")

const app = express.Router();

app.put('/loans', Controller.loanBook);
app.put('/return', Controller.returnBook);

module.exports = app;