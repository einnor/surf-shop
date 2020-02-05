const express = require('express');
const router = express.Router();

const { getPosts } = require('../controllers/posts');
const { errorHandler } = require('../middlewares');

/* GET posts index /posts */
router.get('/', errorHandler(getPosts));

/* GET posts new /posts/new */
router.get('/new', (req, res, next) => {
  res.send('GET /posts/new');
});

/* POST posts create /posts */
router.post('/', (req, res, next) => {
  res.send('CREATE /posts');
});

/* GET posts show /posts/:id */
router.get('/:id', (req, res, next) => {
  res.send('SHOW /posts/:id');
});

/* GET posts edit /posts/:id/edit */
router.get('/:id/edit', (req, res, next) => {
  res.send('EDIT /posts/:id/edit');
});

/* PUT posts update /posts/:id */
router.put('/:id', (req, res, next) => {
  res.send('UPDATE /posts/:id');
});

/* DELETE posts destroy /posts/:id */
router.delete('/:id', (req, res, next) => {
  res.send('DESTROY /posts/:id');
});

module.exports = router;
