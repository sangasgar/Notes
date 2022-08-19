const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const cors = require('cors');

const indexRouter = require('./routes/index');
const chatRouter = require('./routes/chat');
const wsRouter = require('./routes/ws');

const PORT = 4000;
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));
app.use('/', indexRouter);
app.use('/ws', wsRouter);
app.use('/message', chatRouter);
app.listen(PORT, () => {
  console.log('server start port ', PORT);
});

module.exports = app;
