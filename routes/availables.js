
const express = require("express");
const Controller = require("../controllers/availables.controller.js")

const app = express.Router();

app.post('/availables', Controller.loanBook);
app.get('/availables', Controller.getAvailablesBooks);

module.exports = app;