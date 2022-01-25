
const express = require("express");
const Controller = require("../controllers/books.controller.js")

const app = express.Router();

app.post('/books', Controller.createBook);
app.get('/books', Controller.getBooks);

module.exports = app;