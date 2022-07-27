const path = require('path');

const routeURL = path.join(__dirname, 'routes');
const modelsURL = path.join(__dirname, 'models');
const controllersURL = path.join(__dirname, 'controllers')

//Routes
const indexURL = path.join(routeURL, 'index.routes');
const projectsURL = path.join(routeURL, 'projects.routes');

//Controllers
const projectsCtrl = path.join(controllersURL, 'project.controller');

//Models
const ProjectModelURL = path.join(modelsURL, 'Project');


module.exports = {
    indexURL,
    projectsCtrl,
    projectsURL,
    ProjectModelURL
};