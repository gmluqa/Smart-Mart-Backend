"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Img extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Img.belongsTo(models.Product, { foreignKey: "product_id" });
    }
  }
  Img.init(
    {
      product_id: DataTypes.INTEGER,
      img_path: DataTypes.STRING,
      img_definer: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Img",
    }
  );
  return Img;
};
