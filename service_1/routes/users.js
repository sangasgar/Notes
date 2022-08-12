/* eslint-disable max-len */
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = express.Router();
const { Users } = require('../db/models');
const auth = require('../middleWave/auth');

router.route('/')
  .get((req, res, next) => {
    console.log(req.body);
    res.send('respond with a resource');
  })
  .post(async (req, res, next) => {
    const { email, password } = req.body;
    if (email && password) {
      try {
        const userReg = await Users.findOne({ where: { email } });
        const userJson = JSON.parse(JSON.stringify(userReg));
        if (await bcrypt.compare(password, userJson.password)) {
          const token = jwt.sign({ name: userJson.name, email: userJson.email }, process.env.TOKEN_SECRET, { expiresIn: '6h' });
          const user = { name: userJson.name, email: userJson.email, token };
          return res.json(user);
        }
      } catch (error) {
        return res.json({ error: 'Connection error' });
      }
    }
    return res.json({ error: 'not all fields are filled' });
  })
  .put((req, res, next) => {
    console.log(req.body);
    res.json(req.body);
  })
  .delete((req, res, next) => {
    console.log(req.body);
    res.json(req.body);
  });
router.route('/register')
  .post(async (req, res, next) => {
    const { email, name, password } = req.body;
    if (email && name && password) {
      try {
        const userFind = await Users.findOne({ where: { email } });
        if (userFind) {
          return res.json({ error: 'User already register' });
        }
        const userReg = await Users.create({ email, name, password: await bcrypt.hash(password, Number(process.env.SALTROUNDS)) });
        const token = jwt.sign({ name: userReg.name, email: userReg.email }, process.env.TOKEN_SECRET, { expiresIn: '6h' });
        const userRegJson = JSON.parse(JSON.stringify(userReg));
        const user = { name: userRegJson.name, email: userRegJson.email, token };
        return res.json(user);
      } catch (error) {
        return res.json({ error: 'Connection error' });
      }
    }
    return res.json({ error: 'not all fields are filled' });
  });
router.route('/check')
  .post(auth, (req, res) => {
    res.json(req.user);
  });
module.exports = router;
