const express = require('express');
const { addLocation, getLocations,getLocationById, getByCustomerName, updateCustomerName, updateLocation, deleteLocation } = require('../controllers/locationController');
const { authenticate, authorize } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/locations', authenticate, authorize(["admin"]), addLocation);
router.get("/location/customerName/:customerName", authenticate, getByCustomerName);
router.get('/locations', authenticate, getLocations);
router.get('/location/:id', authenticate, getLocationById);
router.put('/locations/:id', authenticate, authorize(['admin']), updateCustomerName);
router.patch('/location/:id', authenticate,authorize(["admin"]), updateLocation);
router.delete('/locations/:id', authenticate, authorize(['admin']), deleteLocation);

module.exports = router;
