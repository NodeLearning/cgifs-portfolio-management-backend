const mongoose = require("mongoose");

const LocationSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
});

module.exports = mongoose.model("Location", LocationSchema);
