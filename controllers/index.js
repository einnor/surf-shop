const User = require('../models/User');

const postRegister = (req, res, next) => {
  User.register(new User({ username: req.body.username }), req.body.password, (err) => {
    if (err) {
      return next(err);
    }

    console.log('user registered!');

    res.redirect('/');
  })
};

module.exports = {
  postRegister,
};
