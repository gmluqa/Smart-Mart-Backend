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

const getProductDetailByName = async (productName) => {
  let productDetail = await models.Product.findOne({
    attributes: [
      "id",
      "product_name",
      "product_alt_text",
      "product_price",
      "product_description",
      "active",
    ],
    where: {
      product_name: productName,
    },
  });
  let allTagsArray = await models.Tag.findAll({
    attributes: ["tag_name"],
    where: {
      product_id: productDetail.id,
    },
  });
  allTagsArray = allTagsArray?.map((i) => i.tag_name);
  let allImgsArray = await models.Img.findAll({
    attributes: ["img_definer", "img_path"],
    where: {
      product_id: productDetail.id,
    },
  });
  // We remove the id from the response
  delete productDetail.dataValues["id"];
  return [productDetail, allTagsArray, allImgsArray];
};

module.exports = {
  getProductDetail,
  getImgByProductIdAndImgDefiner,
  getProductDetailByName,
};
