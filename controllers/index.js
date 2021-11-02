const express = require('express');
const router = express.Router();


const profile = require('./profile');
router.use =(profile);
const frontEndRoutes = require("./frontEndRoutes.js");
router.use(frontEndRoutes);

module.exports = router;