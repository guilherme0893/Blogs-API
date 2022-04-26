const { BlogPost, User, Category } = require('../models');

const createBlogPost = async ({ title, content, categoryIds }) => {
  try {
    const newBlogPost = await BlogPost.create({ title, content, categoryIds });
    return newBlogPost;    
  } catch (error) {
    console.error(error);    
  }
};

const getAllBlogPosts = async () => { 
  const blogPosts = await BlogPost.findAll({ // eager loading
    include: [{
      model: User,
      as: 'user',
    },
    {
      model: Category,
      as: 'categories',
    },
    ],
  });
  return blogPosts;
};

module.exports = {
  createBlogPost,
  getAllBlogPosts,
};
