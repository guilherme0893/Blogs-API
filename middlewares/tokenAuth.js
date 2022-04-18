const jwt = require('jsonwebtoken');
// const { User } = require('../models');

const tokenAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token || token === '') {
      return res.status(401).json({ message: 'Token not found' });
    }
    const decoded = jwt.verify(token, 'seusecretdetoken');
    req.user = decoded;
    // return res.status(200).json({ message: decoded });
  } catch (error) {
    console.error(error);   
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
  next();
};

module.exports = {
  tokenAuth,
};
