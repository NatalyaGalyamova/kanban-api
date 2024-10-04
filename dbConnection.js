const mongoose = require('mongoose');

function dbConnection(){
    mongoose.connect('mongodb+srv://admin:qjU!CN2pJ8Jfzcf@kanban.3vupq.mongodb.net/?retryWrites=true&w=majority&appName=kanban');
}

module.exports = dbConnection;