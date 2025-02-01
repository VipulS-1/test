exports.adminLogin = (req, res, next) => {
  return res.status(200).json({
    userId: "fetchedUser.userId",
    token: "token",
    expiresIn: 3600,
  });
};
