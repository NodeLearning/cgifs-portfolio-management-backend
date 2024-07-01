const { mongo } = require("mongoose");

require("dotenv").config();

module.exports = {
  development: {
    mongo_uri: process.env.MONGO_URI,
    port: process.env.PORT,
    jwt_secret: process.env.JWT_SECRET,
    origin: process.env.ORIGIN,
  },
};
