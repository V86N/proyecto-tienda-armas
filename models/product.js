'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Category)
      Product.belongsToMany(models.Order, {
        through:models.OrderProduct
      })
    }
  }
  Product.init({
    name:{ type: DataTypes.STRING,
    allowNull:false,
    validate:{
      notNull:{
        msg:"Please enter a name"
      }
    }
  },
    price:{ type: DataTypes.STRING,
    allowNull:false,
    validate:{
      notNull:{
        msg:"Please enter a price"
      }
    }
  },
    CategoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};