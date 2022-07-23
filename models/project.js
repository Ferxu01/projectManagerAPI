const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    name: String,
    creationDate: Date
});

const ProjectModel = mongoose.model('project', ProjectSchema);

module.exports = {
    Project: ProjectModel
};