const mongoose = require('mongoose');

const { PROJECT_MANAGER_HOST, PROJECT_MANAGER_DATABASE } = process.env;
const MONGODB_URI = `mongodb://${PROJECT_MANAGER_HOST}/${PROJECT_MANAGER_DATABASE}`;

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db => console.log('Database connected'))
.catch(err => console.log(err));