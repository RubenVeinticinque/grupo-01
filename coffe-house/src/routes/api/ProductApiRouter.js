const { Router } = require("express");
const {
  ProductCategories,
} = require("../../controllers/api/CategoriesProdApiController");
const {
  productsList,
} = require("../../controllers/api/ProductListApiController");
const router = Router();

router.get("/table-products", productsList);
router.get("/categories-products", ProductCategories);

module.exports = router;
