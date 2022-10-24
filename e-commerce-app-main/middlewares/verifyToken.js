const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const { isNil, isNull } = require("lodash");
const Users = require("../models/User");
const Products = require("../models/Product");


module.exports = {
  verifyTokenAndAuthorization: async (req, res, next) => {
    try {
      const { userId } = req.params;
      const token = req.header("Authorization");
      if (!token) {
        if (isNil(req.header("Authorization"))) {
          throw { status: 400, message: "Authorization Header is required" };
        }
      }
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await Users.findById(userId);
      if (isNull(user) || user.id !== decoded.user._id) {
        throw { status: 401, message: "Invalid Token" };
      }
      req.user = user;
      next();
    } catch (err) {
      console.log(err);
      return res
        .status(err.status || 500)
        .send(err.message || "Something went wrong");
    }
  },
  verifyTokenAndAdmin: async (req, res, next) => {
    try {
      const { userId } = req.params;
      const token = req.header("Authorization");
      if (!token) {
        if (isNil(req.header("Authorization"))) {
          throw { status: 400, message: "Authorization Header is required" };
        }
      }
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await Users.findById(userId);
      if (isNull(user) || user.id !== decoded.user._id) {
        throw { status: 401, message: "Invalid Token" };
      }
      if (user.isAdmin === true) {
        req.user = user;
        next();
      }
      else {
        throw { status: 401, message: "This is not an Admin" };
      }
    } catch (err) {
      console.log(err);
      return res
        .status(err.status || 500)
        .send(err.message || "Something went wrong");
    }
  },
}


