const createError = require('http-errors');
const cors = require('cors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

const userRouter = require('./routes/user');
const donorRouter = require('./routes/donor');
const indexRouter = require('./routes/index');
const chatRouter = require('./routes/chat');

// web sockets
require('./chat-sockets');

// various plugins
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser());
app.use(express.static(path.join(__dirname, 'public')));

// connect to db
mongoose.connect(process.env.MONGODB_URI);

app.use(cors());
app.options('*', cors()); // include before other routes

app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/donor', donorRouter);
app.use('/chat', chatRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  console.error(err);
  res.send(err.status || 500);
});

module.exports = app;
