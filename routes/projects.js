const express = require('express');
const constants = require('../constants');
const router = express.Router();
//const Project = require(constants.modelsURL + 'project');
const Project = require(__dirname + '\\..\\models\\project');

router.get('/', (req, res) => {
    Project.find()
        .then(result => {
            console.log(result);
            res.send({ projects: result});
        })
        .catch(err => res.send({ error: err }));

    res.send('My projects');
});

module.exports = router;