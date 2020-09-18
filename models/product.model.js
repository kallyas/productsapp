//product model

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
    max: 100,
  },
  price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

ProductSchema.index({ name: "text" });
//export the model
module.exports = mongoose.model("Product", ProductSchema);
