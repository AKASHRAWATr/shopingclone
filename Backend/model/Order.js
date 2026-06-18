const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: String,

  products: Array,

  totalPrice: Number,

  paymentId: String,

  orderId: String,

  status: String,
});
const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);

module.exports = Order;
