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

module.exports = {
  createCategory,
};
