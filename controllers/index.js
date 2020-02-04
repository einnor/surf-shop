const User = require('../models/User');

const postRegister = (req, res, next) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    image: req.body.image
  });
  User.register(newUser, req.body.password, (err) => {
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
