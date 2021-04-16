// serve as a means to collect all of the API routes and package them up for us
// the API endpoints nice and organized while allowing the API to be scalable
const router = require('express').Router();

const userRoutes = require('./user-routes');

router.use('/users', userRoutes);

module.exports = router;
