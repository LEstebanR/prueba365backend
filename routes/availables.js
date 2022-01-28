
const express = require("express");
const Controller = require("../controllers/availables.controller.js")

const app = express.Router();

app.get('/availables', Controller.getAvailablesBooks);

module.exports = app;