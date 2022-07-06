// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");

// import our database connection from config.js
const sequelize = require("../config/connection");
const Tag = require("../models/Tag");
const Product = require("../models/Product");

// Initialize ProductTag model (table) by extending off Sequelize's Model class
class ProductTag extends Model {}

//fields and rules for Product model
const schema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  product_id: {
    type: DataTypes.INTEGER,
    foreignKey: {
      references: Product,
      key: "id",
    },
  },
  tag_id: {
    type: DataTypes.INTEGER,
    foreignKey: {
      references: Tag,
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
  modelName: "product_tag",
};

ProductTag.init(schema, options);

module.exports = ProductTag;
