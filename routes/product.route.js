const express = require("express");
const router = express.Router();

//require controllers
const productController = require("../controllers/product.controller");

//create route
router.post("/create", productController.productCreate);

//get end point
router.get("/:id", productController.productDetails);

//update endpoint
router.put("/:id/update", productController.productUpdate);

// delete end point
router.delete("/:id/delete", productController.productDelete);

//get all products
router.get("/", productController.allProducts);

//export the module
module.exports = router;
