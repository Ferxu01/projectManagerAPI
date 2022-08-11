const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const { httpHeaders } = require('./middleware');

const indexRouter = require('./routes/index');

//Database connection
require('./database');

const app = express();

//Configuration variables
app.set('port', 3000);
app.use(bodyParser.json());
app.set(express.json());

//Middlewares
app.use(httpHeaders);

//app.use(express.urlencoded({ extended: false }));

//Routes


//Routers
/*require('./routes');*/
app.use('/', indexRouter);
require('./routes/index');


app.listen(app.get('port'));