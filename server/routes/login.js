const { User } = require("../models");
const validate = require("../util/validation");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = async (req, res) => {
  const { username, password } = req.body;
  
  let { error } = validate.login.validate({username,password});

  // validate
  if (error) return res.status(400).json({ error: error.details[0].message });
  const user = await User.findOne({ username });
  if (!user) return res.status(401).json({ error: "You are not Registered" });
  let result = await bcrypt.compare(password, user.password);
  if (!result) return res.status(401).json({ error: "Wrong Password" });

  // sign tokens
  let accessToken = jwt.sign(
    { username: user.username, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "1m" }
  );

  let refreshToken = jwt.sign(
    { username: user.username, email: user.email },
    process.env.JWT_SECRET + user.password,
    { expiresIn: "4d" }
  );

  // set header
  res.set({"x-token":accessToken})

  // set cookies
  res.cookie("refreshToken", refreshToken, {
    expiresIn: 345600000,
    httpOnly: true,
  });

  // set response
  let response = {};
  response.name = user.name;
  response.username = user.username;
  response.email = user.email;
  response.accessToken = accessToken
  res.status(200).json(response);

};
