const { urlencoded } = require('express');
const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(require('./controllers/authController'));

module.exports = app;