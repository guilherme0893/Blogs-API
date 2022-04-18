const { Category } = require('../models');

const createCategory = async (name) => {
  try {
    const newCategory = await Category.create({ name });
    return newCategory;    
  } catch (error) {
    console.error(error);
  }
};

const getCategory = async () => {
  try {
    const category = await Category.findAll({ attributes: ['id', 'name'] });
    return category;    
  } catch (error) {
    console.error(error);    
  }
};

module.exports = {
  createCategory,
  getCategory,
};
