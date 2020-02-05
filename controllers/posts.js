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
  console.log(post);
  res.redirect(`/posts/${post.id}`);
}

const showPost = async (req, res, next) => {
  const post = await Post.findOne({ id: req.params.id });
  res.render('posts/show', { posts });
};

module.exports = {
  getPosts,
  newPost,
  createPosts,
  showPost,
};
