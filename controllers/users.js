// const bcrypt = require("bcrypt");

const User = require("../models/User.js");

const registerUser = async (req, res) => {
  // const saltRounds = 10;
  // const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    // password: hashedPassword,
  });

  try {
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { registerUser };
