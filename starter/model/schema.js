const mongoose = require('mongoose');


const TaskSchema = mongoose.Schema({
    name : {
        type:String,
        required: [true, 'must provide name'],
        maxlength: [20, 'name can not be more than 20 characters']
    },
    compelete : {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Task', TaskSchema);