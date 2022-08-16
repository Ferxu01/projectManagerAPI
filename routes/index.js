const projects = require('../apiServices/projects/routes');
const technologies = require('../apiServices/technologies/routes');

const express = require('express');
const router = express.Router();

router.use('/projects', projects);
router.use('/technologies', technologies);

module.exports = router;