var express = require('express');
var router = express.Router();
var db = require('../db');

/* GET All comments for a post by post_id */
router.get('/:post_id/comments', (req, res, next) => {
  db('comments')
    .where({post_id: req.params.post_id})
    .then(comments => res.json(comments))
    .catch(err => next(err))
})

/* POST A new comment for a post by post_id */
router.post('/:post_id/comments', (req, res, next) => {
  db('comments')
    .insert({post_id: req.params.post_id, content: req.body.content})
    .where({post_id: req.params.post_id})
    .returning('*')
    .then(comments => res.json(comments[0]))
    .catch(err => next(err))
})

module.exports = router;
