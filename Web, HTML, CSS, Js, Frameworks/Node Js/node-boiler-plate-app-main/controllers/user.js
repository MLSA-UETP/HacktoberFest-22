const { Users } = require("../models");

module.exports = {
  get: async (req, res) => {
    try {
      const users = await Users.findAll();
      return res.status(200).send({ users });
    } catch (err) {
      console.log(err);
      return res.status(err.status || 500).message(err.message || "Something went wrong...");
    }
  }
};