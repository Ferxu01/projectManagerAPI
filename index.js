const express = require('express');
const constants = require('./constants');

const app = express();

//Configuration variables
app.set('port', 3000);
app.set(express.json());

//Routes
const projectsRoute = require(constants.projectsURL);

//Routers
app.use('/projects', projectsRoute);


app.listen(app.get('port'));