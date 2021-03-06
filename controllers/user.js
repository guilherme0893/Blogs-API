const User = require('../services/user');
const { createToken } = require('../services/tokenGenerator');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  try {
    const user = await User.createUser({ displayName, email, password, image });
    // console.log(user, 'eu sou o USER DO CONTROLLER!!!');
    if (!user) {
      return res.status(409).json({ message: 'User already registered' });
    }
    const createdToken = await createToken(user);
    // console.log(createdToken, 'OLHA O TOKEN AQUI');
    return res.status(201).json({ token: createdToken });
    // return user;    
  } catch (error) {
    console.error(error);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.getAllUsers();
    if (!users) return res.status(400);
    return res.status(200).json(users);
  } catch (error) {
    console.error(error);    
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.getUser(id);
    if (!user) return res.status(404).json({ message: 'User does not exist' });
    return res.status(200).json(user);
  } catch (error) {
    console.error(error);    
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUser,
};
