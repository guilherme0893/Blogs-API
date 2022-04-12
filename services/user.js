const { User } = require('../models');

const createUser = async ({ displayName, email, password, image }) => {
  try {
    // check email --> regra de negocio 
    const checkEmail = await User.findOne({ where: { email } });
    if (checkEmail) return 'User already registered';
    if (!checkEmail) {
      const user = await User.create({ displayName, email, password, image });
      return user;  
    }  
  } catch (error) {
    console.error(error);    
  }
};

module.exports = {
  createUser,
};
