const sequelize = require("./../utils/database");
const { DataTypes, Model } = require("sequelize");

class User extends Model {}

User.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
  },
  { sequelize, modelName: "user" }
);

module.exports = { User };
