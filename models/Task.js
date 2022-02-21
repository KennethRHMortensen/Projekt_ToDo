const mongoose = requre("mongoose");

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
    isArchieved: {
        type: Boolean, 
        required: true
    },
    /**
     * department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department',
        required: true
    } */
    // Key to join task to list?????
    list: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'List',
        required: true
    }
});

module.exports = new mongoose.model('Task', TaskSchema);