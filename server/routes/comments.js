var express = require('express');
var router = express.Router();
var db = require('../db');

/* GET comments */
router.post('/:post_id/comments', (req, res, next) => {
  db('comments')
    .insert({post_id: req.params.post_id, content: req.body.content})
    .where({post_id: req.params.post_id})
    .returning('*')
    .then(comments => res.json(comments[0]))
    .catch(err => next(err))
})

module.exports = router;
