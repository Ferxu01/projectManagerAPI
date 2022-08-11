const {Schema, model} = require('mongoose');

const ProjectSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }/*,
    creationDate: Date*/
});

const ProjectModel = model('Project', ProjectSchema);

module.exports = ProjectModel;