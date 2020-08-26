const Product = require("../models/product.model");

// testing
exports.test = (req, res) => {
  res.send("greetings from testcontroller");
};

exports.productCreate = (req, res) => {
  let product = new Product({
    name: req.body.name,
    price: req.body.price,
  });
  product.save((err) => {
    if (err) return next(err);
    res.send({
      status: 200,
      message: "Product created success fully!",
    });
  });
};

// get product by Id
exports.productDetails = (req, res, next) => {
  Product.findById(req.params.id, (err, product) => {
    if (err) return next(err);
    res.send(product);
  });
};

// update product by Id
exports.productUpdate = (req, res) => {
  Product.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    (err, product) => {
      if (err) return next(err);
      res.send({
        status: 200,
        message: "Product udpated.",
      });
    }
  );
};

// delete a product by ID
exports.productDelete = (req, res) => {
  Product.findByIdAndRemove(req.params.id, (err) => {
    if (err) return next(err);
    res.send({
      status: 200,
      message: "Deleted successfully!",
    });
  });
};

//get all products
exports.allProducts = (req, res) => {
  Product.find((err, products) => {
    if (err) return console.error(err);
    res.send(products);
    console.log(products.length);
    
  });
};
