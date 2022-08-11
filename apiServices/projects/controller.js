const projectsCtrl = {};
const projectModel = require('./model');
const projectDto = require('./dto');

projectsCtrl.getProjects = async (req, res) => {
    const projects = await projectModel.getProjects();
    
    return res.send(projectDto.multiple(projects, undefined));
};

projectsCtrl.addProject = async (req, res) => {
    const { name } = req.body;
    
    const project = await projectModel.addProject({
        name
    });

    return res.send(projectDto.single(project, undefined));
};

projectsCtrl.deleteProject = async (req, res) => {
    const id = req.params.id;
    const project = await projectModel.deleteProject(id);

    if (!project) {
        res.send({ error: "Project don't exist" });
    } else {
        res.send(projectDto.single(project, undefined));
    }    
};


module.exports = projectsCtrl;