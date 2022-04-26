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
  try {
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
  } catch (error) {
    console.error(error);    
  }
};

const getBlogPostById = async (id) => {
  try {
    const blogPost = await BlogPost.findByPk({ // findByPk não aceita o where junto
      include: [{
        model: User,
        as: 'user',
      },
    {
      model: Category,
      as: 'categories',
    }],
      where: { id },
    });
    return blogPost;    
  } catch (error) {
    console.error(error);    
  }
};

module.exports = {
  createBlogPost,
  getAllBlogPosts,
  getBlogPostById,
};
