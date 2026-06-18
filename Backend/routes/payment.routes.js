const express = require("express");
const payment = require("../controllers/payment.js");
let router = express.Router();
router.post("/create-order", payment);
module.exports = router;
