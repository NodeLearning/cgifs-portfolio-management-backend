const Location = require("../models/locationModel");

// Add Location
exports.addLocation = async (req, res) => {
  const { customerName, latitude, longitude } = req.body;
  try {
    const location = new Location({ customerName, latitude, longitude });
    await location.save();
    res.status(201).send("Location saved");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get All Locations
exports.getLocations = async (req, res) => {
  try {
    const locations = await Location.find();
    res.json({message: "successfully get data", data:locations});
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get Location By Id
exports.getLocationById = async (req, res) => {
  const { id } = req.params;
  try{
    const location = await Location.findById(id);
    res.json({message: "successfully get data", data:location});
  } catch(error) {
    res.status(400).json({ message: error.message });
  }
}

// Get Location By Customer Name
exports.getByCustomerName = async (req,res) => {
  const {customerName} = req.params;
  try {
    const location = await Location.findOne({customerName});

    if(!location) {
      return res.status(404).send("Customer not found"); 
    }

    res.json({message: "successfully get data", data:location});
  } catch(error) {
    res.status(400).json({ message: error.message });  
  }
}

// Update Customer Name
exports.updateCustomerName = async (req, res) => {
  const { id } = req.params;
  const { customerName } = req.body;
  try {
    await Location.findByIdAndUpdate(id, { customerName });
    res.send("Customer name updated");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update Location data
exports.updateLocation = async (req,res) => {
  try {
    const {id} = req.params;
    const updateData = req.body;

    const updatedLocation = await Location.findByIdAndUpdate(
      id,
      { $set: updateData },
      { new: true, runValidators: true }
    );

    if (!updatedLocation) {
      return res.status(404).json({ message: "Location not found" });
    }

    res.json({ message: "Location updated", data: updatedLocation});
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
}

// Delete a Location
exports.deleteLocation = async (req, res) => {
  const { id } = req.params;
  try {
    await Location.findByIdAndDelete(id);
    res.send("Location deleted");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
