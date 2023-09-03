const express = require('express');

const router = express.Router();

// Import controllers
const { getHome, getProfile } = require('../controllers/controller');

// Define routes
router.get('/home', getHome);
router.get('/profile/:user', getProfile);


module.exports = router;