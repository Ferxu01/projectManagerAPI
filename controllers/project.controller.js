const projectsCtrl = {};
const { ProjectModelURL } = require('../constants');

const Project = require(ProjectModelURL);

projectsCtrl.getProjects = (req, res) => {
    Project.find()
        .then(result => {
            console.log(result);
            res.send({ projects: result});
        })
        .catch(err => res.send({ error: err }));
};

module.exports = projectsCtrl;