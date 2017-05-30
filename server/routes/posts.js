var express = require('express');
var router = express.Router();
var db = require('../db');

/* GET posts */
router.get('/', (req, res, next) => {
  db('posts')
    .then(posts => {
      return db('comments')
        .whereIn('post_id', posts.map(p => p.id))
        .then((comments) => {
          const commentsByPostId = comments.reduce((result, comment) => {
            result[comment.post_id] = result[comment.post_id] || []
            result[comment.post_id].push(comment)
            return result
          }, {})
          posts.forEach(post => {
            post.comments = commentsByPostId[post.id] || []
          })
          res.json(posts)
        })
    })
    .catch(err => next(err))
})

module.exports = router;
