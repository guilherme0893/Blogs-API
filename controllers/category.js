const Category = require('../services/category');

const createCategory = async (req, res) => {
  const { name } = req.body;
  try {
    const newCategory = await Category.createCategory(name);
    return res.status(201).send(newCategory);
  } catch (error) {
    console.error(error);    
  }
};

const getCategory = async (req, res) => {
  try {
    const categories = await Category.getCategory();
    return res.status(200).json(categories);
  } catch (error) { 
    console.error(error);    
  }
};

module.exports = {
  createCategory,
  getCategory,
};
