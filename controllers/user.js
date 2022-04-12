const User = require('../services/user');
const createToken = require('../services/tokenGenerator');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  try {
    const user = User.createUser({ displayName, email, password, image });
    if (user) {
      return res.status(409).json({ message: 'User already registered' });
    }
    const createdToken = await createToken(user);
    return res.status(201).json({ token: createdToken });
    // return user;    
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  createUser,
};
