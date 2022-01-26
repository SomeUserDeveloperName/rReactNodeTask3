var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const storage = require('./repositories/store')

var indexRouter = require('./routes/index');
var notesRouter = require('./routes/notesRouter');

var app = express();

app.locals.persistStorage = storage
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/notes', notesRouter);

module.exports = app;
