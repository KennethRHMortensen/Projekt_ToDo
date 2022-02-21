const mongoose = requre("mongoose");

//Instantiate new list with mongoose
const ListSchema = new mongoose.Schema({
    
    dateStart: {
        type: Date,
        required: true
    },
    // encrypting password through bcrypt
    isArchived: {
        type: Boolean,
        required: true
    },
    dateEnd: {
        type: Date, 
        required: false
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    user_userName: {
        type: mongoose.Schema.Types.userName,
        required: true,
        ref: 'User'
    }
});

module.exports = new mongoose.model('List', ListSchema);