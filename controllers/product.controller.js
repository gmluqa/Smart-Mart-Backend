const { getProductDetail } = require("../services/product.service.js");

const getProductDetailController = async (req, res) => {
  try {
    const { id } = req.params;
    const resp = await getProductDetail(id);
    resp.id ? res.status(202).json(resp) : res.status(404).json;
  } catch (error) {
    res.status(404).json({ message: "product not found" });
  }
};

module.exports = {
  getProductDetailController,
};
