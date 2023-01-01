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

const getImgByProductIdAndImgDefiner = async (productId, imgDefiner) => {
  const productImg = await models.Img.findOne({
    where: {
      product_id: productId,
      img_definer: imgDefiner,
    },
    attributes: ["img_path"],
  });
  return productImg;
};

module.exports = {
  getProductDetail,
  getImgByProductIdAndImgDefiner,
};
