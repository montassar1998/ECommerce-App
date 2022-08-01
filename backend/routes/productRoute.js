const router = require("express").Router();

const { addProduct } = require("../controllers/productController");

router.post("/", addProduct);

module.exports = router;
