'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Order)
    }
  }
  User.init({
    firtName:  {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{
          msg:"Please enter your name"
        }
      }
    },
    lastName:  {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{
          msg:"Please enter your lastname"
        }
      }
    },
    email:{
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please enter your email",
        },
        isEmail: {
          msg: "Please enter a correct email",
        },
      },
    },

    password: { 
    type: DataTypes.STRING,
      allowNull: false,
      validate: {
      notNull: {
        msg: "Please enter your password",
      },
    },
  },
    role: DataTypes.STRING,
    birth: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};