const {
  getProductDetail,
  getImgByProductIdAndImgDefiner,
  getProductDetailByName,
  productsGetBySearch,
  createNewProduct,
} = require("../services/product.service.js");

const { createNewProductTag } = require("../services/tag.service.js");

const { createNewProductMainImg } = require("../services/img.service.js");

const getProductDetailController = async (req, res) => {
  try {
    const { id } = req.params;
    const resp = await getProductDetail(id);
    resp.id ? res.status(202).json(resp) : res.status(404).json;
  } catch (error) {
    res.status(404).json({ message: "product not found" });
  }
};

const getImageByIdAndDefiner = async (req, res) => {
  const { id, imgDefiner } = req.params;

  try {
    const resp = await getImgByProductIdAndImgDefiner(id, imgDefiner);
    resp.img_path ? res.status(202).json(resp) : res.status(404).json;
  } catch (error) {
    res.status(404).json({ message: "Img not found" });
  }
};

const getProductDetailByNameController = async (req, res) => {
  const { name } = req.params;
  try {
    const resp = await getProductDetailByName(name);
    resp[0].product_name ? res.status(202).json(resp) : res.status(404).json;
  } catch (error) {
    res.status(404).json({ message: "Product not found" });
  }
};

const searchProductDetailByNameController = async (req, res) => {
  try {
    const { search } = req.params;
    const resp = await productsGetBySearch(search);
    resp[0] ? res.status(202).json(resp) : res.status(204).json();
  } catch (error) {
    res.status(400).json({ message: "Malformed request" });
  }
};

const createProductController = async (req, res) => {
  const body = req.body;
  try {
    console.log(body);
    // first we add the product to our db
    let newProduct = await createNewProduct(body);
    const PRODUCT_ID = newProduct.dataValues.id;
    await createNewProductTag(body, PRODUCT_ID);
    await createNewProductMainImg(body, PRODUCT_ID);
    res.status(202).json({ message: "Created succesfully" });
  } catch (error) {
    res.status(409).json({ message: "Product could not be created" });
  }
};

const deleteProductController = async (req, res) => {
  const { id } = req.params;
  try {
    const productById = await getProductDetail(id);
    await productById.destroy();
    res.status(202).json({ message: "Product deleted succesfully" });
  } catch (error) {
    res.status(404).json({ message: "Product by id not found" });
  }
};

module.exports = {
  getProductDetailController,
  getImageByIdAndDefiner,
  getProductDetailByNameController,
  searchProductDetailByNameController,
  createProductController,
  deleteProductController,
};
