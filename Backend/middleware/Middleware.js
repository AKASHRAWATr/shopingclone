const jwt = require("jsonwebtoken");

function authMiddleware(req, res, next) {
  //   console.log(req.headers.authorization.split(" ")[1]);
  // let token = req.headers.authorization.split(" ")[1];
  // if (!token) {
  //   res.status(401).json({
  //     message: "Unauthorised",
  //   });
  // }

  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      success: false,
      message: "Authorization header missing",
    });
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Token missing",
    });
  }

  let verified = jwt.verify(token, "secret");
  console.log(verified);

  req.user = verified;
  next();
}

function authorize(...allowedRoles) {
  return (req, res, next) => {
    if (!req.user) {
      return res
        .status(401)
        .json({ message: "Unauthorized: Missing authentication data" });
    }

    if (!allowedRoles.includes(req.user.role)) {
      return res
        .status(403)
        .json({ message: "Forbidden: You do not have permission" });
    }

    next();
  };
}
module.exports = {
  authMiddleware,
  authorize,
};
