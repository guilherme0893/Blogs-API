module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    // id: { // já está no migration
    //   type: DataTypes.INTEGER,
    //   primaryKey: true, 
    //   autoIncrement: true,
    // },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },
  {
    timestamps: false,
  });

  User.associate = (models) => {
    User.hasMany(models.BlogPost,
      { foreignKey: 'userId', as: 'blogPost' });
  };

  return User;
};
