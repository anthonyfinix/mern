module.exports = (req, res) => {
  if (!!req.user) return res.json({ error: "You are not logged in" });
  res.removeHeader("accessToken");
  res.clearCookie("refreshToken");
  res.status(200).json({ message: "User logged out" });
};
