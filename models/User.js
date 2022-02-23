const mongoose = require("mongoose");

//Instantiate new user with mongoose
const UserSchema = new mongoose.Schema({
    
    userName: {
        type: String, 
        required: true
    },
    // encrypting password through bcrypt
    password: {
        type: String,
        required: true
    },
    name: {
        type: String, 
        required: false
    },
    profile: {
        type: String,
        enum: ['admin', 'regular', 'pending', 'deactivated'],
        default: 'pending'
    },
    lists: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'List'
    }]
});

module.exports = new mongoose.model('User', UserSchema);