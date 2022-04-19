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

module.exports = { 
  createBlogPost,
};
