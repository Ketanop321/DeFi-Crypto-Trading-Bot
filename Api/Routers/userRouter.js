const express = require('express')  
const authController = require('../Controllers/authController');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.signup);
router.post('/buyMembership', authController.signup);

module.exports = router;