const Location = require("../models/locationModel");

exports.addLocation = async (req, res) => {
  const { customerName, latitude, longitude } = req.body;
  try {
    const location = new Location({ customerName, latitude, longitude });
    await location.save();
    res.status(201).send("Location saved");
  } catch (error) {
    res.status(400).send("Error saving location");
  }
};

exports.getLocations = async (req, res) => {
  try {
    const locations = await Location.find();
    res.json(locations);
  } catch (error) {
    res.status(400).send("Error fetching locations");
  }
};

exports.

exports.updateCustomerName = async (req, res) => {
  const { id } = req.params;
  const { customerName } = req.body;
  try {
    await Location.findByIdAndUpdate(id, { customerName });
    res.send("Customer name updated");
  } catch (error) {
    res.status(400).send("Error updating customer name");
  }
};

exports.deleteLocation = async (req, res) => {
  const { id } = req.params;
  try {
    await Location.findByIdAndDelete(id);
    res.send("Location deleted");
  } catch (error) {
    res.status(400).send("Error deleting location");
  }
};
