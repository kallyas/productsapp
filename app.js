const express = require("express");
const bodyParser = require("body-parser");

const product = require("./routes/product.route");

const app = express();

// Set up mongoose connection
const mongoose = require("mongoose");
let dev_db_url =
  "mongodb+srv://admin:RYGvAr1ine0kZmVf@api.4wjwu.mongodb.net/core?retryWrites=true&w=majority";
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/products", product);

const PORT = 3333;

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
