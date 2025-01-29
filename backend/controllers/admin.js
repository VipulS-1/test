const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Admin = require("../models/admin");

exports.adminLogin = (req, res, next) => {
  return res.status(200).json({
    userId: "fetchedUser.userId",
    token: "token",
    expiresIn: 3600,
  });
  // let fetchedUser;
  // Admin.findOne({ userId: req.body.userId })
  //   .then((admin) => {
  //     if (!admin) {
  //       return res.status(404).json({
  //         message: "User not found",
  //       });
  //     }
  //     fetchedUser = admin;
  //     return bcrypt.compare(req.body.password, admin.password);
  //   })
  //   .then((result) => {
  //     if (!result) {
  //       return res.status(401).json({
  //         message: "Invalid password",
  //       });
  //     } else if (result && result.statusCode != 404) {
  //       const payload = { email: fetchedUser.email, id: fetchedUser._id };
  //       const token = _createToken(
  //         payload,
  //         "2h" // 1h = 1 hour, It ensures it doesn't last forever
  //       );
  //       return res.status(200).json({
  //         userId: fetchedUser.userId,
  //         token: token,
  //         expiresIn: 3600,
  //       });
  //     }
  //   })
  //   .catch(() => {
  //     res.status(500).json({
  //       message: "Something went wrong. Please try again.",
  //     });
  //   });
};

_createToken = (payload, expiryTime) => {
  const secretKey = "process.env.JWT_KEY";
  const token = jwt.sign(payload, secretKey, { expiresIn: expiryTime });
  return token;
};
