const passport = require('passport');

const User = require('../models/User');

const postRegister = async (req, res, next) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    image: req.body.image
  });
  await User.register(newUser, req.body.password);
  res.redirect('/');
};

const postLogin = (req, res, next) => {
  passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login' })(req, res, next);
};

const getLogout = (req, res, next) => {
  req.logout();
  res.redirect('/');
};

module.exports = {
  postRegister,
  postLogin,
  getLogout,
};
