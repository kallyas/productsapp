const Product = require("../models/product.model");

//create a product
exports.productCreate = (req, res) => {
  let product = new Product({
    name: req.body.name,
    price: req.body.price,
  });
  product.save((err) => {
    if (err) return next(err);
    res.status(200).send({
      message: "Product created success fully!",
    });
  });
};

// get product by Id
exports.productDetails = (req, res, next) => {
  Product.findById(req.params.id, (err, product) => {
    if (err) return next(err);
    if (!req.params.id) return res.send({ message: "Not found" });
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
      res.status(200).send({
        message: "Product udpated.",
      });
    }
  );
};

// delete a product by ID
exports.productDelete = (req, res) => {
  Product.findByIdAndRemove(req.params.id, (err) => {
    if (err) return next(err);

    res.status(200).send({
      message: "Deleted successfully!",
    });
  });
};

//get all products
exports.allProducts = async (req, res, next) => {
  try {
    let products = await Product.find({});
    if (!products.length) {
      res.status(404).send({ message: "No products found" });
    } else {
      res.status(200).send(products);
    }
  } catch (error) {
    next(error);
  }
};

// product search
exports.search = async (req, res, next) => {
  try {
    const searchTerm = req.body.search;
    let results = await Product.find({ $text: { $search: searchTerm } });
    if (!results.length) {
      res.status(404).send({ message: "No results found! " });
    } else {
      res.status(200).send({ results: results });
    }
  } catch (error) {
    next(error);
  }
};
