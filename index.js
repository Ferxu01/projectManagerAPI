const express = require('express');
const { indexURL, projectsURL } = require('./constants');
require('dotenv').config();

//Database connection
require('./database');

const app = express();

//Configuration variables
app.set('port', 3000);
app.set(express.json());

//Routes


//Routers
app.use('/', require(indexURL));
app.use('/projects', require(projectsURL));


app.listen(app.get('port'));