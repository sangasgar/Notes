const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const WebSocket = require('ws');
const cors = require('cors');

const server = WebSocket.Server({ port: 4000 });
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const PORT = 4000;
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.listen(PORT, () => {
  console.log('server start port ', PORT);
});

module.exports = app;
