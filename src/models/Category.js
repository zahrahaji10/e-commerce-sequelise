// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");

// import our database connection from config.js
const sequelize = require("../config/connection.js");

// Initialize Category model (table) by extending off Sequelize's Model class
class Category extends Model {}

// fields and rules for Category model
const schema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  category_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

// declare the options for the table
const options = {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: "category",
};

Category.init(schema, options);

module.exports = Category;
