const mongoose = require('mongoose');
const uri = "mongodb://localhost:27017/taskManager"



function connectToDb(){
    return mongoose.connect(uri);
}

module.exports = connectToDb ; 