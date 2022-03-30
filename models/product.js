const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  quantity: {
    type: Number
  },
  price: {
    type: Number,
    require: true
  },
  image: {
    type: String,
    require: true,
  },
  desc: {
    type: String
  },
  category: {
    type: String,
    require: true
  }
});

const Product = mongoose.model("product", productSchema);
module.exports = Product;