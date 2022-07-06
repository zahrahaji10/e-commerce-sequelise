// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");

// import our database connection from config.js
const sequelize = require("../config/connection");
const Category = require("../models/Category");

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

//fields and rules for Product model
const schema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  product_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    valiate: {
      isDecimal: true,
    },
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isNumeric: true,
    },
    default: 10,
  },
  category_id: {
    type: DataTypes.INTEGER,
    foreignKey: {
      references: Category,
      key: "id",
    },
  },
};

// declare the options for the table
const options = {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: "product",
};

Product.init(schema, options);

module.exports = Product;
