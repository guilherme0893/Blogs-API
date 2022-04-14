const { User } = require('../models');

const createUser = async ({ displayName, email, password, image }) => {
  try {
    const checkEmail = await User.findOne({ where: { email } });
    if (!checkEmail) {
      const user = await User.create({ displayName, email, password, image });
      return user;  
    }  
  } catch (error) {
    console.error(error);    
  }
};

const getAllUsers = async () => {
  try {
    const users = await User.findAll({ attributes: ['displayName', 'email', 'password', 'image'] });
    return users;    
  } catch (error) {
    console.error(error);    
  }
};

const getUser = async (id) => {
  try {
    const user = await User.findOne({ where: { id } });
    return user;
  } catch (error) {
    console.error(error);    
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUser,
};
