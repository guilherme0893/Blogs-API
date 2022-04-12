const { User } = require('../models');

const getLoginUser = async (email) => { // vai procurar um usuario no db
  const user = await User.findOne({ where: { email } });
  return user;
};

module.exports = {
  getLoginUser,
};
