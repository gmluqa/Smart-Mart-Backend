const models = require("../models/index");

const createNewProductMainImg = async (body, productId) => {
  const NewProductMainImg = new models.Img({
    product_id: productId,
    img_path: body.img_path,
    img_definer: "main",
  });
  await NewProductMainImg.save();
  return NewProductMainImg;
};

module.exports = { createNewProductMainImg };
