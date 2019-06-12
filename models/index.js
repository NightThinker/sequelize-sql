import Sequelize from 'sequelize';

const sequelize = new Sequelize('name_database', 'username', 'password', {
  dialect: 'mysql',
  host: 'localhost'
})

const db = {
  User: sequelize.import('./user'),
  Board: sequelize.import('./board'),
  Suggestion: sequelize.import('./suggestion'),
};

Object.keys(db).forEach((modelName) => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;

export default db;
