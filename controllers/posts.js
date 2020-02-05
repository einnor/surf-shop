const Post = require('../models/Post');

const getPosts = async (reg, res, next) => {
  const posts = await Post.find({});
  res.render('posts/index', { posts });
};

module.exports = {
  getPosts,
};
