const express = require("express");
const Controller = require("../controllers/loans.controller.js")

const app = express.Router();

app.put('/loans', Controller.loanBook);

module.exports = app;