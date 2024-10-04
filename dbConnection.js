const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://admin:@kanban.3vupq.mongodb.net/?retryWrites=true&w=majority&appName=kanban';

function dbConnection() {
    mongoose.connect(connectionString)
        .then(() => console.log('Connected!'))
        .catch(err => console.log(err));
}

module.exports = dbConnection;