const Post = require('../models/Post');

const getPosts = async (req, res, next) => {
  const posts = await Post.find({});
  res.render('posts/index', { posts });
};

const newPost = (req, res, next) => {
  res.render('posts/new');
};

const createPosts = async (req, res, next) => {
  const post = await Post.create(req.body);
  res.redirect(`/posts/${post.id}`);
}

module.exports = {
  getPosts,
  newPost,
  createPosts,
};
