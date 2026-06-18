const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  //   name: {
  //     type: String,
  //     required: true,
  //   },
  //   brand: {
  //     type: String},

  //     category:{

  //       type:String}
  //   },
  //   price: {
  //     type: Number,
  //     required: true,
  //   },
  //   currency: {
  //     type: String,
  //   },
  //   stock: {
  //     type: Number,
  //   },
  //   rating: {
  //     type: Number,
  //   },
  //   description: String,
  //   image: String,
  //   sku: {
  //     type: String,
  //   },
  // });
  name: {
    type: String,
    required: true,
  },

  brand: {
    type: String,
  },

  category: {
    type: String,
  },
  categorys: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },

  currency: {
    type: String,
  },

  stock: {
    type: Number,
  },

  rating: {
    type: Number,
  },

  description: {
    type: String,
  },

  image: {
    type: String,
  },

  sku: {
    type: String,
  },
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
