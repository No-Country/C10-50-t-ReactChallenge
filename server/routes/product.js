const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/product.controller");

router.get("/", ProductController.getProducts);
router.put("/", ProductController.editProduct);
router.post("/", ProductController.createProduct);
router.delete("/:id", ProductController.deleteProduct);

module.exports = router;
