const express = require('express');

const router = express.Router();
const { Posts } = require('../db/models');

router.route('/')
  .get(async (req, res, next) => {
    try {
      const postsBd = await Posts.findAll();
      const posts = JSON.parse(JSON.stringify(postsBd));
      return res.json(posts);
    } catch (error) {
      return res.json({ errorBd: 'connection error' });
    }
  })
  .post(async (req, res, next) => {
    const { userId, name, description } = req.body;
    if (name && description && userId) {
      try {
        const postBd = await Posts.findOne({ where: { name } });
        if (postBd) {
          return res.json({ errorName: 'This post already exists.' });
        }
        const postCreate = await Posts.create({ name, description, user_id: userId });
        const post = JSON.parse(JSON.stringify(postCreate));
        return res.json(post);
      } catch (error) {
        return res.json({ errorBd: 'connection error' });
      }
    }
    return res.json({ errorFields: 'not all fields are filled' });
  })
  .put(async (req, res, next) => {
    const {
      id, name, description, userId,
    } = req.body;
    if (id && name && description && userId) {
      try {
        const postBd = await Posts.update({ name, description }, { where: { id } });
        const post = {
          id: postBd.id, name: postBd.name, description: postBd.description, userID: postBd.user_id,
        };
        return res.json(post);
      } catch (error) {
        return res.json({ error: 'Connection error' });
      }
    }
    res.json({ error: 'not all fields are filled' });
  });
router.route('/:id')
  .delete(async (req, res, next) => {
    const { id } = req.params;
    console.log({ id });
    if (id) {
      try {
        await Posts.destroy({ where: { id } });
        return res.sendStatus(200);
      } catch (error) {
        return res.json({ error: 'Connection error' });
      }
    }
    return res.json({ error: 'error id' });
  });

module.exports = router;
