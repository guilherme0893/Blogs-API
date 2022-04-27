const { BlogPost, User, Category } = require('../models');

const createBlogPost = async ({ title, content, categoryIds }) => {
  try {
    const newBlogPost = await BlogPost.create({ title, content, categoryIds });
    return newBlogPost;    
  } catch (error) {
    console.error(error);    
  }
};

// const createBlogPost = async ({ id, title, content, categoryIds }) => {
//   try {
//     const categoryPromises = await Promise.all(categoryIds.map(async (categoryId) => { // categoryIds é um array --> promise
//       const categories = await Category.findAll({ categoryId });
//       return categories;
//     })); 
//     const categories = categoryPromises[0];
//     const arrayOfIds = categories.map((category) => category.dataValues.id); // console.log(arrayOfIds); // PEGOU OS VALORES NUM ARRAY!
//     if (arrayOfIds.some((categoryId) => categoryId == null)) {
//       throw new Error('"categoryId" not found');
//     }
//     const blogPost = { title, content, id, categoryIds: arrayOfIds };
//     const newBlogPost = await BlogPost.create(blogPost);
//     return newBlogPost;    
//   } catch (error) {
//     console.error(error);    
//   }
// };

const getAllBlogPosts = async () => {
  try {
    const blogPosts = await BlogPost.findAll({ // parece o do course
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
    const blogPost = await BlogPost.findOne({ // findByPk não aceita o where junto
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
