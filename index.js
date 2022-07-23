const express = require('express');
const constants = require('./constants');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');

//Database connection
mongoose.connect('mongodb://localhost:27017/projectManager', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const app = express();

//app.use(bodyParser.urlencoded({ extended: true }));

//Configuration variables
app.set('port', 3000);
app.set(express.json());

//Routes
const projectsRoute = require(constants.projectsURL);

//Routers
app.use('/projects', projectsRoute);


app.listen(app.get('port'));