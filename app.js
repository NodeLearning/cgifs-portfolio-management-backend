const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const config = require("./config/config");

const authRoutes = require("./routes/authRoutes");
const locationRoutes = require("./routes/locationRoutes");
const errorHandler = require("./middleware/errorHandler");

const MONGO_URI = config.development.mongo_uri;

if (!MONGO_URI) {
  console.error("MongoDB connection string is missing in .env file.");
  process.exit(1);
}

const app = express();

const FRONTEND = config.development.origin;

const corsOptions = {
  origin: FRONTEND,
  optionsSuccessStatus: 200,
}

app.use(cors(corsOptions));
app.use(bodyParser.json());

// routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/user", locationRoutes);

app.get("/", (req, res) => {  
  res.json({ message: "Hello! Welcome to the CGIFS Portfolio Management API" 
  });})

app.use(errorHandler);

mongoose
  .connect(MONGO_URI, {
    serverApi: {
      version: "1",
      strict: true,
      deprecationErrors: true,
    },
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

module.exports = app;
