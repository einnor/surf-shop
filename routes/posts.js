var express = require('express');
var router = express.Router();

/* GET posts index /posts */
router.get('/', (req, res, next) => {
  res.send('/posts');
});

module.exports = router;
