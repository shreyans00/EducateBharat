const jwt = require("jsonwebtoken");
const Register = require("../models/register");

const auth = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    const verifyUser = jwt.verify(token, process.env.SECRET_KEY);
    // token ke samay bhi ek id generate ho jata hai, jisse hm user ka data access kr skte hai
    const user = await Register.findOne({ _id: verifyUser._id });

    req.token = token;
    req.user = user;

    next();
  } catch (e) {
    res.status(401).send(e);
  }
};

module.exports = auth;
