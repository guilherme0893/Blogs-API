const User = require('../services/user');

const createUser = async (req, _res) => {
  const { displayName, email, password, image } = req.body;
  try {
    const user = User.createUser({ displayName, email, password, image });
    return user;    
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  createUser,
};
