const express = require('express');
const { updateProfile } = require('./profilecontroller');
const upload = require('../middleware/uploadMiddleware');
const router = express.Router();

router.post('/profile', upload.single('profilePicture'), updateProfile);

module.exports = router;
