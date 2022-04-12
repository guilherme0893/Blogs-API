const User = require('../services/user');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  try {
    const user = User.createUser({ displayName, email, password, image });
    if (user) {
      return res.status(409).json({ message: 'User already registered' });
    }
    return user;    
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  createUser,
};
