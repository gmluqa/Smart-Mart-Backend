"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.hasMany(models.Tag, { foreignKey: "product_id" });
      Product.hasMany(models.Img, { foreignKey: "product_id" });
    }
  }
  Product.init(
    {
      product_name: DataTypes.STRING,
      product_alt_text: DataTypes.STRING,
      product_price: DataTypes.STRING,
      product_description: DataTypes.TEXT("medium"),
      active: DataTypes.BOOLEAN,
      youtube_url: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
