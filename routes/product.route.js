const express = require("express");
const router = express.Router();

//require controllers
const productController = require("../controllers/product.controller");

//test the route
router.get("/test", productController.test);

//create route
router.post("/create", productController.productCreate);
//export the module
module.exports = router;
