const routes = {};
const Project = require('./Project');

routes.getProjects = async () => {
    return await Project.find().populate('usedTechnologies', {
        _id: 0,
        name: 1
    });
};

routes.addProject = async ({ name, description }) => {
    const newProject = new Project({
        name,
        description,
        usedTechnologies
    });

    console.log(newProject);

    return await newProject.save();
};

routes.deleteProject = async (id) => {
    const project = await Project.findByIdAndRemove({
        _id: id
    });

    return project;
};

module.exports = routes;