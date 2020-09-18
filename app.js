const express = require("express");
const bodyParser = require("body-parser");

const product = require("./routes/product.route");

require("dotenv").config();

const app = express();

// Set up mongoose connection
const mongoose = require("mongoose");
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
};

let mongoDB = process.env.MONGODB_URI || "";
mongoose.connect(mongoDB, options);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send({ message: "Products API" });
});

//base route
app.use("/products", product);

const PORT = process.env.PORT || 5200;

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
