const models = require("../models/index");

// Following service effectively does:
// SELECT Products.product_name
// FROM Products
// JOIN Tags ON Products.id = Tags.product_id
// WHERE Tags.tag_name = 'Tech';

//This whole time I was doing joins wrong, I feel like an idiot

const getProductsByTag = async (tagName) => {
  const productsGotByTagName = await models.Tag.findAll({
    include: {
      model: models.Product,
      include: {
        model: models.Img,
      },
    },
    where: {
      tag_name: tagName,
    },
  });
  return productsGotByTagName;
};

const createNewProductTag = async (body, productId) => {
  const newProductTag = new models.Tag({
    product_id: productId,
    tag_name: body.tag_name,
  });
  await newProductTag.save();
  return newProductTag;
};

module.exports = {
  getProductsByTag,
  createNewProductTag,
};
