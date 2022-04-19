const { BlogPost } = require('../models');

const createBlogPost = async ({ title, content, categoryIds }) => {
  try {
    const newBlogPost = await BlogPost.create({ title, content, categoryIds });
    return newBlogPost;    
  } catch (error) {
    console.error(error);    
  }
};

module.exports = {
  createBlogPost,
};
