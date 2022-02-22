const mongoose = require("mongoose");

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
    // user_userName: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true,
    //     ref: 'User'
    // } TODO: Find a way to join a list to a user, when sending post request.
});

module.exports = new mongoose.model('List', ListSchema);