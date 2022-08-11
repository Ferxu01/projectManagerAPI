const { Router } = require('express');
const controller = require('./controller');
const router = Router();

router.get('/', controller.getProjects);
router.post('/add', controller.addProject);
router.delete('/delete/:id', controller.deleteProject);

module.exports = router;