const jwt = require('jsonwebtoken');

const secret = require('../services/tokenGenerator');

const tokenAuth = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ message: 'Token not found' });
    }
    jwt.verify(token, secret);
    next();    
  } catch (error) {
    console.error(error);   
    return res.status(401).json({ message: 'Expired or invalid token' }); 
  }
};

module.exports = {
  tokenAuth,
};
