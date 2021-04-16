//add route for homeRoutes router.use()
//collect the packaged API routes

//here we are collecting the packaged group of API endpoints and prefixing them with the path /api
const router = require('express').Router();

const userRoutes = require('./api/user-routes');

router.use('/users', userRoutes);

module.exports = router;