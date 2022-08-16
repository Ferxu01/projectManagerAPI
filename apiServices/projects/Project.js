const {Schema, model} = require('mongoose');
const { TechnologySchema } = require('../technologies/Technology');

const ProjectSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    usedTechnologies: [{
        type: Schema.Types.ObjectId,
        ref: 'Technology'
    }],
    /*,
    creationDate: Date*/
});

const ProjectModel = model('Project', ProjectSchema);

module.exports = ProjectModel;