const { User } = require("../models");
const validator = require("../util/validation");
module.exports = async (req, res) => {
  const { name, username, password, email } = req.body;
  let { error } = validator.register.validate({name,username,password,email});
  if (error) return res.status(400).json({ error: error.details[0].message });
  let user = new User({name,username,password,email})
  let newUser = await user.save();
  res.status(200).json({ message: `User ${newUser} Registered` });
};
