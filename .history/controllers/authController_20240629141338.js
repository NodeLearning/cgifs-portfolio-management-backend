const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/serModel");

exports.register = async (req, res) => {
  const { username, password, role } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword, role });
    await user.save();
    res.status(201).send("User registered");
  } catch (error) {
    res.status(400).send("Error registering user");
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).send("Invalid credentials");
    }
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET
    );
    res.json({ token });
  } catch (error) {
    res.status(400).send("Error logging in");
  }
};
