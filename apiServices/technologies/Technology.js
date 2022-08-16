const { Schema, model } = require('mongoose');

const TechnologySchema = new Schema({
    name: {
        type: String,
        required: true
    }
});

const TechnologyModel = model('Technology', TechnologySchema);

module.exports = {
    TechnologySchema,
    TechnologyModel
};