const express = require('express');

const app = express();

//Configuration variables
app.set('port', 3000);
app.set(express.json());

app.listen(app.get('port'));