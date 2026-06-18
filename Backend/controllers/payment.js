// const order = require("../model/Order.js");
// const razorpay = require("../config/razorpay.js");
// const payment = async (req, res) => {
//   try {
//     const { amount } = req.body;
//     const options = {
//       amount: amount * 100,
//       currency: "INR",
//       receipt: "receipt_" + Date.now(),
//     };
//     const order = await razorpay.orders.create(options);
//     res.status(200).json({
//       message: "payment succesful",
//       order: order,
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: "Order create failed",
//     });
//   }
// };
// module.exports = payment;
const razorpay = require("../config/razorpay");

const payment = async (req, res) => {
  try {
    const { totalPrice } = req.body;

    console.log("Amount:", totalPrice);

    const options = {
      amount: Number(totalPrice) * 100,
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };

    const razorpayOrder = await razorpay.orders.create(options);

    res.status(200).json({
      order: razorpayOrder,
    });
  } catch (error) {
    console.log("FULL ERROR:", error);

    res.status(500).json({
      error: error.message,
    });
  }
};

module.exports = payment;
