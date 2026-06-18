const express = require("express");
const {
  getData,
  getallproduct,
  getproductbyid,
  addproduct,
  deleteproduct,
  editProduct,
  addToProduct,
  getallcart,
} = require("../controllers/products.controller");
const { authMiddleware, authorize } = require("../middleware/Middleware");
let router = express.Router();

// router.get("/", getData);
router.get("/", getallproduct);
router.get("/:id", getproductbyid);
router.post("/create", authMiddleware, authorize("admin"), addproduct);
// router.post("/create", addproduct);
router.delete("/delete/:id", authMiddleware, deleteproduct);
// router.delete("/delete/:id", deleteproduct);
router.patch("/edit/:id", authMiddleware, authorize("admin"), editProduct);
router.post("/add-to-cart", addToProduct);
router.get("/allcart/:id", getallcart);
module.exports = router;
