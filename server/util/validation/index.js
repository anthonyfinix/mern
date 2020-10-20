const joi = require("@hapi/joi");

const username = joi.string().min(3).max(15);
const password = joi.string().min(3).max(40);

module.exports = {
  login: joi.object({
    username: username.required(),
    password: password.required(),
  }),
  username: username,
  password: password,
};

