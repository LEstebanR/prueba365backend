
const express = require("express");
const Controller = require("../controllers/users.controller.js")

const app = express.Router();

app.post('/users', Controller.createUser);
app.get('/users', Controller.getUsers);
app.get('/user/:id', Controller.getUser);
app.put('/user/:id', Controller.updateUser);
app.delete('/user/:id', Controller.deleteUser);

module.exports = app;