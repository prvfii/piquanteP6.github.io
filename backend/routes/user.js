const express = require('express');
const router = express.Router();
// IMPORTATION CONTROLLERS
const userCtrl = require('../controllers/user');

// ROUTE
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;