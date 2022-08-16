const { Router } = require('express');
const router = Router();
const controller = require('./controller');

router.get('/', controller.getAllTechnologies);
router.get('/:id', controller.getProjectTechnology);

module.exports = router;