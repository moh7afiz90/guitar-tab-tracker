module.exports = (sequelize, DataType) =>
  sequelize.define('User', {
    name: {
      type: DataType.STRING
    },
    email: {
      type: DataType.STRING,
      unique: true
    },
    password: {
      type: DataType.STRING
    }
  })
