// const express = require("express");
const asyncHandler = require("express-async-handler");

const Product = require("../model/product.model");
const User = require("../model/user.model");
Product;
module.exports.getData = function (req, res) {
  res.send("heyyyyy");
};

// find()
module.exports.getallproduct = async function (req, res) {
  try {
    let products = await Product.find();
    if (!products || products.length === 0) {
      return res.status(404).json({
        message: "No products found",
      });
    }
    res.json({
      message: "All Products fetched Sucessfully",
      products,
    });
  } catch (error) {
    console.log(error);
  }
};
// app.get("/products/:id",

module.exports.getproductbyid = async function (req, res) {
  let { id } = req.params;
  //   req.body
  try {
    // let product = await products.find((item) => item.id == id);

    let products = await Product.findById(id);

    if (!products) {
      return res.status(400).json({
        message: "your single product was not found ",
      });
    }
    // Products.findById(id)
    res.json({
      message: "Single product fetched successfully",
      products,
    });
  } catch (error) {
    console.log(error.product);
  }
};

// create()
module.exports.addproduct = async function (req, res) {
  try {
    const {
      name,
      brand,
      category,
      categorys,
      price,
      currency,
      stock,
      rating,
      description,
      image,
      sku,
    } = req.body;
    if (
      !name ||
      !brand ||
      !category ||
      !categorys ||
      !price ||
      !currency ||
      !stock ||
      !rating ||
      !description ||
      !image ||
      !sku
    ) {
      return res.json({
        message: "all feild are requried",
      });
    }
    // console.log(req.body);

    let products = await Product.create({
      name,
      brand,
      category,
      categorys,
      price,
      currency,

      stock,
      rating,
      description,
      image,
      sku,
    });
    if (!products) {
      return res.status(400).json({
        message: "Error in creating product",
      });
    }
    res.json({
      massage: "your data save sucessfully",
      products,
    });
  } catch (error) {
    res.status(400).json({
      message: "Incorrect data sent, all fields are required",
    });
  }
};
// app.delete("/product/:id",

// findByIdAndDelete(id)
module.exports.deleteproduct = async function (req, res) {
  try {
    const id = req.params.id;
    // products = products.filter((item) => item.id !== id);
    let products = await Product.findByIdAndDelete(id);
    if (!products) {
      return res.json({
        message: "product can not de deleted",
      });
    }
    return res.status(200).json({
      message: "product can be deleted successfully",
      product,
    });
  } catch (error) {
    res.status(400).json({
      message: "your data can not be deleted",
    });
  }
};

module.exports.editProduct = asyncHandler(async function (req, res) {
  let { id } = req.params;
  console.log(req.body);
  let updated = await Product.findByIdAndUpdate(id, req.body, {
    returnDocument: "after",
  });
  if (!updated) {
    return res.status(400).json({
      message: "Unable to Edit",
    });
  }
  return res.status(200).json({
    message: "Product Updated",
    updatedProduct: updated,
  });
});

module.exports.addToProduct = async (req, res) => {
  try {
    const { userId, productId } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    // Check product already exists
    if (user.cart.includes(productId)) {
      return res.status(400).json({
        message: "Product already in cart",
      });
    }

    // Save product id in cart
    user.cart.push(productId);

    await user.save();

    res.status(200).json({
      success: true,
      message: "Product added to cart",
      cart: user.cart,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports.getallcart = async (req, res) => {
  try {
    const { id } = req.params;
    const carts = await User.findById(id).populate("cart");
    res.status(200).json({
      success: "true",
      cart: carts.cart,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
