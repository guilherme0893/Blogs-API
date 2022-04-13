const jwt = require('jsonwebtoken');

const jwtConfig = {
  expiresIn: '15m',
  algorithm: 'HS256',
};

const secret = 'seusecretdetoken';

function createToken(user) {
  const token = jwt.sign({ data: user }, secret, jwtConfig);
  return token;
}

module.exports = { 
  createToken,
};
