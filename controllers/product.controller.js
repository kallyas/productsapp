const Product = require("../models/product.model");
exports.test = (req, res) => {
  res.send("greetings from testcontroller");
};

exports.productCreate = (req, res) => {
  let product = new Product({
    name: req.body.name,
    price: req.body.price,
  });
};

product.save((err) => {
  if (err) return next(err);
  res.send({ success: "Product created success fully!" });
});
