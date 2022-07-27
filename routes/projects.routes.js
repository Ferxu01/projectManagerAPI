const { Router } = require('express');
const { projectsCtrl } = require('../constants');
const { getProjects } = require(projectsCtrl);
const router = Router();

router.get('/', getProjects);

module.exports = router;