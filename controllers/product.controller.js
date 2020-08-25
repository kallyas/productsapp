const Product = require("../models/product.model");
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

exports.productDetails = (req, res, next) => {
  Product.findById(req.params.id, (err, product) => {
    if (err) return next(err);
    res.send(product);
  });
};

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

exports.productDelete = (req, res) => {
  Product.findByIdAndRemove(req.params.id, (err) => {
    if (err) return next(err);
    res.send({
      status: 200,
      message: "Deleted successfully!",
    });
  });
};

// exports.allProducts = (req, res) => {
//   let data = Product.find(req.params.name);
//   res.send(data);
//   console.log(data);
// };
