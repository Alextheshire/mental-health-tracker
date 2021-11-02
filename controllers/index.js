const express = require('express');
const router = express.Router();


<<<<<<< HEAD
const profile = require('./profile.js');
=======
const profile = require('./profile');
>>>>>>> dev
router.use(profile);
const frontEndRoutes = require("./frontEndRoutes.js");
router.use(frontEndRoutes);

module.exports = router;