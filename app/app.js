const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const threadRouter = require('./routes/thread');
const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');

app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'dist'));
app.use(express.static(path.join(__dirname, 'dist'), {index: false}));
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());

// body-parser middleware
app.use(bodyParser.json());

app.use('/', indexRouter);
app.use('/thread', threadRouter);
app.use('/auth', threadRouter);

module.exports = app;