const BlogPost = require('../services/blogPost');

const createBlogPost = async (req, res) => {
  try {
    const { id, title, content, categoryIds } = req.body; // ta sem o userId console.log(req.body);
    const newBlogPost = await BlogPost.createBlogPost({ id, title, content, categoryIds });
    // console.log(newBlogPost, 'CONTROLLER!!');
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

const getBlogPostById = async (req, res) => {
  const { id } = req.params;
  try {
    const blogPost = await BlogPost.getBlogPostById(id);
    console.log(blogPost, 'CONTROLLER');
    if (!blogPost) return res.status(404).json({ message: 'Post does not exist' });
    return res.status(200).json(blogPost);    
  } catch (error) {
    console.error(error);
  }
};     

module.exports = { 
  createBlogPost,
  getAllBlogPosts,
  getBlogPostById,
};
