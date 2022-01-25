require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const users = require('./routes/users');
const books = require('./routes/books');
const app = express();

app.use(cors());
app.use(express.json());
app.use(users)
app.use(books)

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established succesfully');
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ error: err.message });
});

module.exports = app;