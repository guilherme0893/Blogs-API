const { getLoginUser } = require('../services/login');
const { createToken } = require('../services/tokenGenerator');

const login = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await getLoginUser(email);
    if (!user) return res.status(400).json({ message: 'Invalid fields' });
    return res.status(200).json({ token: createToken() });
  } catch (error) {
    console.error(error);
  }
};

module.exports = { 
  login,
};
