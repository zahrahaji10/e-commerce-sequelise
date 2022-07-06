// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");

// import our database connection from config.js
const sequelize = require("../config/connection.js");

// Initialize Tag model (table) by extending off Sequelize's Model class
class Tag extends Model {}

//fields and rules for Product model
const schema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  tag_name: {
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
  modelName: "tag",
};
Tag.init(schema, options);

module.exports = Tag;
