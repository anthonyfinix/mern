const { User } = require("../models");
const validator = require("../util/validation");
module.exports = async (req, res) => {
  const { name, username, password, email } = req.body;
  let { error } = validator.register.validate({name,username,password,email});
  if (error) return res.status(400).json({ error: error.details[0].message });
  let usernameExist = await User.findOne({username});
  if(!!usernameExist) return res.status(409).json({error:"Username already exist"})
  let emailExist = await User.findOne({email});
  if(!!emailExist) return res.status(409).json({error:"Email already in use"})
  let user = new User({name,username,password,email})
  let newUser = await user.save();
  res.status(200).json({ message: `User ${newUser} Registered` });
};
