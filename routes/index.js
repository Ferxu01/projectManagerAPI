const projects = require('../apiServices/projects/routes');

const express = require('express');
const router = express.Router();

router.use('/projects', projects);

module.exports = router;