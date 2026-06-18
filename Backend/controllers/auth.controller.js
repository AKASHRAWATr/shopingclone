const asyncHandler = require("express-async-handler");
const User = require("../model/user.model");
const jwt = require("jsonwebtoken");

module.exports.register = asyncHandler(async function (req, res) {
  const { name, email, password, role } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({
      message: "all  field are requrired  ",
    });
  }

  let user = await User.create({
    name,
    email,
    password,
    role,
  });

  if (!user) {
    return res.status(400).json({
      message: "Error in creating user",
    });
  }

  let token = jwt.sign(
    {
      _id: user._id,
      role: user.role,
    },
    "secret",
    { expiresIn: "1h" }
  );

  return res.json({
    message: "User Registered Sucessfully ",
    user,
    token,
  });
});

module.exports.login = asyncHandler(async function (req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      message: "all  field are requrired  ",
    });
  }

  let user = await User.findOne({ email, password });
  if (!user) {
    return res.status(400).json({
      message: "Incorrect email or password",
    });
  }

  // let token = jwt.sign(
  //   {
  //     _id: user._id,
  //   },
  //   "secret",
  //   { expiresIn: "1h" }
  // );
  let token = jwt.sign(
    {
      _id: user._id,
      role: user.role,
    },
    "secret",
    { expiresIn: "1h" }
  );
  res.json({
    message: "user sucessfully login",
    user,
    token,
  });
});

module.exports.profile = asyncHandler(async (req, res) => {
  // res.send(req.userId);
  let user = await User.findById(req.user._id).select("-password");
  res.json({
    user,
  });
});
