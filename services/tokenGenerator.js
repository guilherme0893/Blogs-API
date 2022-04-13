const jwt = require('jsonwebtoken');

function createToken(user) {
  const jwtConfig = {
    expiresIn: '15m',
    algorithm: 'HS256',
  };
  const secret = 'seusecretdetoken';
  const token = jwt.sign({ data: user }, secret, jwtConfig);
  return token;
}

module.exports = { 
  createToken,
};
