var express = require('express');
var router = express.Router({ mergeParams: true }); // Pull in the ID of the post

/* GET reviews index /posts/:id/reviews */
router.get('/', (req, res, next) => {
  res.send('GET /posts/:id/reviews');
});

/* POST reviews create /posts/:id/reviews */
router.post('/', (req, res, next) => {
  res.send('CREATE /posts/:id/reviews');
});

/* GET reviews edit /posts/:id/reviews/:review_id/edit */
router.get('/:review_id/edit', (req, res, next) => {
  res.send('EDIT /posts/:id/reviews/:review_id/edit');
});

/* PUT reviews update /posts/:id/reviews/:review_id */
router.put('/:review_id', (req, res, next) => {
  res.send('UPDATE /posts/:id/reviews/:review_id');
});

/* DELETE reviews destroy /posts/:id/reviews/:review_id */
router.delete('/:review_id', (req, res, next) => {
  res.send('DESTROY /posts/:id/reviews/:review_id');
});

module.exports = router;
