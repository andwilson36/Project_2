const router = require('express').Router();
const driveRoutes = require('./drive-routes');
const locationRoutes = require('./location-routes');
const pickupRoutes = require('./pickup-routes');
const rideRoutes = require('./ride-routes');
const riderRoutes = require('./rider-routes');

router.use('/drive-routes', driveRoutes);
router.use('/location-routes', locationRoutes);
router.use('/pickup-routes', pickupRoutes);
router.use('/ride-routes', rideRoutes);
router.use('/rider-routes', riderRoutes);

module.exports = router;
