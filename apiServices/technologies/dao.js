const routes = {};
const { TechnologyModel } = require('./Technology');
const Project = require('../projects/Project');

routes.getAllTechnologies = async () => {
    return await TechnologyModel.find();
};

routes.getProjectTechnologies = async (projectId) => {
    const project = await Project.findById({ _id: projectId });

    console.log(project);

    return project.usedTechnologies;
};

module.exports = routes;