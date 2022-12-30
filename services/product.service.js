// const { Op, DATE } = require("sequelize");
const models = require("../models/index");

const getProductDetail = async (id) => {
  const productDetail = await models.Product.findOne({
    where: {
      id: id,
    },
  });
  return productDetail;
};

module.exports = {
  getProductDetail,
};
