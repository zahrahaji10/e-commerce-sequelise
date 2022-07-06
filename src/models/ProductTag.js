const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class ProductTag extends Model {}

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

const options = {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: "product_tag",
};

ProductTag.init(schema, options);

module.exports = ProductTag;
