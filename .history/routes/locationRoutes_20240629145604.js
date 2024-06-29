const express = require('express');
const { addLocation, getLocations,get updateCustomerName, deleteLocation } = require('../controllers/locationController');
const { authenticate, authorize } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/locations', authenticate, addLocation);
router.get('/locations', authenticate, getLocations);
router.put('/locations/:id', authenticate, authorize(['admin']), updateCustomerName);
router.delete('/locations/:id', authenticate, authorize(['admin']), deleteLocation);

module.exports = router;
