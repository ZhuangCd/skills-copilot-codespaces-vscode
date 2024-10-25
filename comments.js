// Create web server
// npm install express
// npm install body-parser
// npm install mongoose
// npm install nodemon

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Connect to database
mongoose.connect('mongodb://localhost:27017/comments', { useNewUrlParser: true });

// Create schema
const commentSchema = new mongoose.Schema({