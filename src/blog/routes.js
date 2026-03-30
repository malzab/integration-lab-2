const express = require('express');
const router = express.Router();
const Post = require('./post')

router.post('/nowy', async (req, res) => {
  try {
    const { title, content, author } = req.body;
    await Post.create({ title, content, author});
    res.send('<p>Post dodany!</p>');
  } catch (err) {
    console.error(err);
    res.status(500).send('Błąd');
  }
});

module.exports = router;