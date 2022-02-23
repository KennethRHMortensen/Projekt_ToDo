const mongoose = require("mongoose");

//Instantiate new task with mongoose
const TaskSchema = new mongoose.Schema({
    
    title: {
        type: String, 
        required: true
    },
    description: {
        type: String,
        required: false
    },
    isCompleted: {
        type: Boolean, 
        required: true
    },
    dateStart: {
        type: Date, 
        required: true
    },
    dateEnd: {
        type: Date, 
        required: false
    },
    dateDeadline: {
        type: Date, 
        required: false
    },
    isArchived: {
        type: Boolean, 
        
    },
    list: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'List'
    }
});

module.exports = new mongoose.model('Task', TaskSchema);