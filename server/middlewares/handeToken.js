const jwt = require("jsonwebtoken");
const { User } = require("../models");
const cookieParser = require("cookie-parser");

module.exports = async (req, res, next) => {
  const token = req.header("x-token");
  if (token) {
    try {
      let { username, email } = jwt.verify(token, process.env.JWT_SECRET);
      req.user = { username, email };
    } catch (error) {
      if (error.message === "jwt expired") {
        const refreshToken = req.cookies.refreshToken;
        if (refreshToken) {
          const { username } = jwt.decode(refreshToken);
          const user = await User.findOne({ username });
          if(user){
            let refreshSecret = process.env.JWT_SECRET + user.password;
            try {
              let { email } = await jwt.verify(
                refreshToken,
                refreshSecret
              );
              req.user = user;
              let accessToken = jwt.sign(
                { username: user.name, email: user.email },
                process.env.JWT_SECRET,
                { expiresIn: "1m" }
              );
              res.set({ "x-token": accessToken });
            } catch (error) {
              console.log(`refresh token ${error.message}`);
            }
          }
        }
      }
    }
  }
  next();
};
