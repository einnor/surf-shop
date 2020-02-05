const Post = require('../models/Post');

const postIndex = async (req, res, next) => {
  const posts = await Post.find({});
  res.render('posts/index', { posts });
};

const postNew = (req, res, next) => {
  res.render('posts/new');
};

const postCreate = async (req, res, next) => {
  const post = await Post.create(req.body);
  console.log(post);
  res.redirect(`/posts/${post.id}`);
}

const postShow = async (req, res, next) => {
  const post = await Post.findById(req.params.id);
  res.render('posts/show', { post });
};

const postEdit = async (req, res, next) => {
  const post = await Post.findById(req.params.id);
  res.render('posts/edit', { post });
};


module.exports = {
  postIndex,
  postNew,
  postCreate,
  postShow,
  postEdit,
};
