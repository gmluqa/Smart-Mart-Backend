const { getProductDetail } = require("../services/product.service.js");

const getProductDetailController = async (req, res) => {
  try {
    const { id } = req.params;
    const resp = await getProductDetail(id);
    resp ? res.status(202).json(resp) : res.status(204).json;
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error });
  }
};

module.exports = {
  getProductDetailController,
};
