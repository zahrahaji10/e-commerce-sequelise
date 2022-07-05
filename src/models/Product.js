// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");
const {
  Category,
} = require("../../../../instructor/class-content/13-ORM/02-Challenge/Develop/models");
// import our database connection from config.js
const sequelize = require("../config/connection");

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
  productName: {
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
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    foreignKey: {
      references: Category,
      key: "id",
    },
  },
};

const options = {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: "product",
};

Product.init(schema, options);

module.exports = Product;
