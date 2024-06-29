const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const locationRoutes = require("./routes/locationRoutes");
const errorHandler = require("./middleware/errorHandler");

const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
  console.error("MongoDB connection string is missing in .env file.");
  process.exit(1);
}

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/api/auth", authRoutes);
app.use("/api", locationRoutes);
app.use(errorHandler);

mongoose
  .connect(process.env.MONGO_URI, {
  serverApi: {
    strict: true,
    deprecationErrors: true,
  }})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

module.exports = app;
