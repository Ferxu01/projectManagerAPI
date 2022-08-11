const routes = {};
const Project = require('./Project');

routes.getProjects = async () => {
    return await Project.find();
};

routes.addProject = async ({ name }) => {
    const newProject = new Project({
        name
    });

    return await newProject.save();
};

routes.deleteProject = async (id) => {
    const project = await Project.findByIdAndRemove({
        _id: id
    });

    return project;
};

module.exports = routes;