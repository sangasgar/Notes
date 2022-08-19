const express = require('express');
const events = require('events');

const router = express.Router();
const emitter = new events.EventEmitter();
/* GET users listing. */
router.route('/')
  .get((req, res) => {
    emitter.once('newMessage', (message) => {
      res.json(message);
    });
  })
  .post((req, res) => {
    const { message } = req.body;
    emitter.emit('newMessage', message);
    res.sendStatus(200);
  });
module.exports = router;
