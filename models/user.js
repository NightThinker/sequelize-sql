export default (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    username: DataTypes.STRING,
  });

  //1 to many with board
  User.associate = (models) => {
    User.hasMany(models.Board, {
      foreignKey: 'owner'
    })
  }
  //1 to many with suggestion
  User.associate = (models) => {
    User.hasMany(models.Suggestion, {
      foreignKey: 'craetorId'
    })
  }

  return User;
};
