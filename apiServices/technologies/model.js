const routes = {};
const technologiesDao = require('./dao');

routes.getAllTechnologies = () => {
    return technologiesDao.getAllTechnologies();
};

routes.getProjectTechnology = (id) => {
    return technologiesDao.getProjectTechnologies(id);
};

module.exports = routes;