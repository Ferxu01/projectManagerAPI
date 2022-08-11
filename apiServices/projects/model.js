const routes = {};
const projectDao = require('./dao');

routes.getProjects = () => {
    return projectDao.getProjects();
};

routes.addProject = ({ name }) => {
    return projectDao.addProject({
        name
    });
};

routes.deleteProject = (id) => {
    return projectDao.deleteProject(id);
};

module.exports = routes;