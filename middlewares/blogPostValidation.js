const titleValidation = (req, res, next) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ message: '"title" is required' });
  }
  next();
};

const contentValidation = (req, res, next) => {
  const { content } = req.body;
  if (!content) {
    return res.status(400).json({ message: '"content" is required' });
  }
  next();
};

const categoryIdValidation = (req, res, next) => {
  const { categoryIds } = req.body;
  if (!categoryIds) {
    return res.status(400).json({ message: '"categoryIds" is required' });
  }
  next();
};

// const blogPostIdValidation = (req, res, next) => {
//   const { id } = req.params;
//   if (!id) return res.status(404).json({ message: 'Post does not exist' });
//   next();
// };

module.exports = {
  titleValidation,
  contentValidation,
  categoryIdValidation,
  // blogPostIdValidation,
};
