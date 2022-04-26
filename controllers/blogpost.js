const BlogPost = require('../services/blogPost');

const createBlogPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  try {
    const newBlogPost = await BlogPost.createBlogPost({ title, content, categoryIds });
    return res.status(201).send(newBlogPost);    
  } catch (error) {
    console.error(error);    
  }
};

const getAllBlogPosts = async (req, res) => {
  try {
    const blogPost = await BlogPost.getAllBlogPosts();
    return res.status(200).json(blogPost);
  } catch (error) {
    console.error(error);    
  }
};

module.exports = { 
  createBlogPost,
  getAllBlogPosts,
};
