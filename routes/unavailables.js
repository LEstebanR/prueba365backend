
const express = require("express");
const Controller = require("../controllers/unavailables.controller.js")

const app = express.Router();

app.post('/unavailables', Controller.receiveBook);
app.get('/unavailables', Controller.getUnavailablesBooks);

module.exports = app;