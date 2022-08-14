const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const amqplib = require('amqplib');
const nodemailer = require('nodemailer');
const indexRouter = require('./routes/index');

const app = express();
const PORT = 3100;
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log('start server ', PORT);
});
function sendEmail(email, subject, body) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: '47d28bc0172bb8',
      pass: '45496c6e73505d',
    },
  });
  const message = {
    from: 'sangas@yandex.ru',
    to: email,
    subject,
    text: body,
  };
  transporter.sendMail(message, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
}
(async () => {
  const queue = 'tasks';
  const conn = await amqplib.connect('amqp://guest:guest@localhost');

  const ch1 = await conn.createChannel();
  await ch1.assertQueue(queue);

  // Listener
  ch1.consume(queue, (msg) => {
    if (msg !== null) {
      console.log('Recieved:', msg.content.toString());
      const message = msg.content.toString().split('|');

      sendEmail(message[0], message[1], message[2]);
      ch1.ack(msg);
    } else {
      console.log('Consumer cancelled by server');
    }
  });
})();
module.exports = app;
