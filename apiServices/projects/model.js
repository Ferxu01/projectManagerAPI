const routes = {};
const projectDao = require('./dao');

routes.getProjects = () => {
    return projectDao.getProjects();
};

routes.addProject = ({ name, description, usedTechnologies }) => {
    return projectDao.addProject({
        name,
        description,
        usedTechnologies
    });
};

routes.deleteProject = (id) => {
    return projectDao.deleteProject(id);
};

module.exports = routes;