const usersModel = require("../models/users");

//.POST => /login
const login = (req, res, next) => {
  res.send("LOGIN");
};

//.POST => /signup
const signup = async (req, res, next) => {
  try {
    const {
      body: { email, password },
    } = req;

    const user = await usersModel.create({ email, password });
    res.json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  login,
  signup,
};
