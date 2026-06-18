const express = require("express");
const app = express();
let productRoute = require("./routes/products.routes.js");
let authcontroller = require("./routes/auth.routes.js");
const connectDB = require("./config/mongodb.js");
const cors = require("cors");
const paymentRoutes = require("./routes/payment.routes.js");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.get(path,func/controller);

// let products = [
//   {
//     id: 1,
//     name: "Wireless Bluetooth Headphones",
//     brand: "SoundMax",
//     category: "Electronics",
//     price: 2999,
//     currency: "INR",
//     stock: 120,
//     rating: 4.5,
//     description:
//       "Noise-cancelling over-ear wireless headphones with 40-hour battery life.",
//     image: "https://example.com/images/headphones.jpg",
//     sku: "SM-HP-1001",
//     isAvailable: true,
//     createdAt: "2026-05-20T10:00:00Z",
//   },
//   {
//     id: 2,
//     name: "Smart Fitness Watch",
//     brand: "FitPulse",
//     category: "Wearables",
//     price: 4999,
//     currency: "INR",
//     stock: 75,
//     rating: 4.3,
//     description:
//       "Water-resistant fitness smartwatch with heart rate and sleep tracking.",
//     image: "https://example.com/images/watch.jpg",
//     sku: "FP-WT-2002",
//     isAvailable: true,
//     createdAt: "2026-05-20T10:05:00Z",
//   },
//   {
//     id: 3,
//     name: "Gaming Mechanical Keyboard",
//     brand: "KeyStorm",
//     category: "Computer Accessories",
//     price: 3499,
//     currency: "INR",
//     stock: 45,
//     rating: 4.7,
//     description:
//       "RGB backlit mechanical keyboard with blue switches for gamers.",
//     image: "https://example.com/images/keyboard.jpg",
//     sku: "KS-KB-3003",
//     isAvailable: true,
//     createdAt: "2026-05-20T10:10:00Z",
//   },
//   {
//     id: 4,
//     name: "4K Ultra HD Monitor",
//     brand: "ViewTech",
//     category: "Monitors",
//     price: 18999,
//     currency: "INR",
//     stock: 20,
//     rating: 4.6,
//     description:
//       "27-inch 4K UHD monitor with HDR support and ultra-thin bezels.",
//     image: "https://example.com/images/monitor.jpg",
//     sku: "VT-MN-4004",
//     isAvailable: true,
//     createdAt: "2026-05-20T10:15:00Z",
//   },
//   {
//     id: 5,
//     name: "Portable SSD 1TB",
//     brand: "DataSafe",
//     category: "Storage",
//     price: 7999,
//     currency: "INR",
//     stock: 60,
//     rating: 4.8,
//     description: "High-speed USB-C portable SSD with 1TB storage capacity.",
//     image: "https://example.com/images/ssd.jpg",
//     sku: "DS-SSD-5005",
//     isAvailable: true,
//     createdAt: "2026-05-20T10:20:00Z",
//   },
// ];

app.use("/products", productRoute);
app.use("/auth", authcontroller);
app.use("/api/payment", paymentRoutes);
// app.get("/products", function (req, res) {
//   res.json({
//     message: "All Products fetched Sucessfully",
//     products,
//   });
// });

// To send - Routes(params) and Forms(body)

// Dynamic Routes
// app.get("/products/:id", function (req, res) {
//   let { id } = req.params;
//   //   req.body
//   let product = products.find((item) => item.id == id);
//   res.json({
//     message: "Product fetched",
//     product,
//   });
// });
// app.post("/product", function (req, res) {
//   const {
//     name,
//     brand,
//     category,
//     price,
//     currency,
//     stock,
//     rating,
//     description,
//     image,
//     sku,
//     isAvailable,
//   } = req.body;
//   res.json({
//     massage: "your data save sucessfully",
//   });
// });
// app.delete("/product/:id", function (req, res) {
//   const id = Number(req.params.id);

//   products = products.filter((item) => item.id !== id);

//   res.json({
//     message: "your data delete successfully",
//     products,
//   });
// });
// app.post("/post", function (req, res) {
//   const { name, email, password } = req.body;

//   res.json({
//     message: "you are register ",
//     name,
//     email,
//     password,
//   });
// });
// app.post("/login", (req, res) => {
//   const { email, password } = req.body;
//   res.json({
//     message: "user sucessfully login",
//     email,
//     password,
//   });
// });

app.listen(3000, () => {
  console.log("Server is running");
  connectDB();
});

// MVC
