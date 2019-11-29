const Sequelize = require('sequelize');
const metadata = require('../metadata');

var connectionConfig = metadata.getConnectionConfig();

const sequelize = new Sequelize(
    connectionConfig.dbName,
    connectionConfig.dbUser,
    connectionConfig.dbPassword,
    {
        host: connectionConfig.dbHost,
        dialect: 'mysql',
        pool: {
            max: 10,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        define: {
            freezeTableName: true,
            timestamps: false
        }
    }
);

exports.connect = function () {
    sequelize.authenticate().then(function () {
        console.log('DB connection successful.');
    }).catch(function () {
        console.log('DB connection failed.');
    });
};

class Thread extends Sequelize.Model {};
class User extends Sequelize.Model {};

User.init({
  Id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  Admin: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  PasswordHash: {
    type: Sequelize.STRING(40),
    allowNull: false
  },
  Username: {
    type: Sequelize.STRING(20),
    allowNull: false
  },
  Email: {
    type: Sequelize.STRING(30),
    allowNull: false
  }
}, {
  sequelize
});

Thread.init({
  Id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  AuthorId: {
    type: Sequelize.INTEGER,
    references: {
      model: User,
      key: 'Id'
    }
  },
  Title: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  Body: {
    type: Sequelize.STRING(2000),
    allowNull: false
  },
  ImgUrl: {
    type: Sequelize.STRING(200)
  }
}, {
  sequelize
});

exports.User = User;
exports.Thread = Thread;