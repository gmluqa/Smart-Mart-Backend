const { getProductsByTag } = require("../services/tag.service.js");

const getProductsByTagController = async (req, res) => {
  try {
    const { name } = req.params;
    let resp = await getProductsByTag(name);
    resp[0] ? res.status(202).json(resp) : res.status(404).json();
  } catch (error) {
    res.status(400).json({ message: "Malformed request" });
  }
};

module.exports = {
  getProductsByTagController,
};
