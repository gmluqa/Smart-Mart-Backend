const {
  getProductDetail,
  getImgByProductIdAndImgDefiner,
  getProductDetailByName,
} = require("../services/product.service.js");

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
  console.log("arrived!");
};

module.exports = {
  getProductDetailController,
  getImageByIdAndDefiner,
  getProductDetailByNameController,
  searchProductDetailByNameController,
};
