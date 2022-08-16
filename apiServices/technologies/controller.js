const technologiesCtrl = {};
const technologiesModel = require('./model');
const technologyDto = require('./dto');

technologiesCtrl.getAllTechnologies = async (req, res) => {
    const technologies = await technologiesModel.getAllTechnologies();

    return res.send({ data: technologyDto.multiple(technologies) });
};

technologiesCtrl.getProjectTechnology = async (req, res) => {
    const id = req.params.id;
    const technologies = await technologiesModel.getProjectTechnology(id);

    return res.send({ data: technologyDto.multiple(technologies) });
};

module.exports = technologiesCtrl;