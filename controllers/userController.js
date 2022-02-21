
const bcrypt = require("bcrypt");
const mongoUtil = require("../models/mongoUtil");
const User = require("../models/User");




module.exports = {
    // query for users and sorting parameters
    getUser: async function (query, sort) {
        const db = await mongoUtil.mongoConnect();                          // connect
        const users = await User.find(query, null, sort);                   // find and read users collection, sorted
        db.close();                                                         // close connection, so we don't have multiple open or leave a hole
        return users;
    },
    postUser: async function (req) {
        const db = await mongoUtil.mongoConnect();                          // connect
        bcrypt.hash(req.body.password, 10, function(err, hash) {            // Create user only if Hash is successful
            let user = new User({                                           // create obejct in schema-format
                userName: req.body.username,
                name: req.body.name,
                password: hash
            });
            // create method is a static method from mongoose that uses the Create method from http methods (C.R.U.D.)
            User.create(user, function(error, savedDocument) {
                console.log(savedDocument); //! remove when publishing
                if (error) console.log(error);
                db.close();
            });
        });
    },
    loginUser: async function (req, res) {
        console.log("in loginUser");
        const db = await mongoUtil.mongoConnect();
        const inputUser = req.body.username;
        const inputPwd = bcrypt.hash(req.body.password, 10);
        
        const user = await User.findOne({ userName: inputUser}, function (err, foundUser) {
            if (foundUser) {
                // password comparison
                if (foundUser.password === inputPwd) {
                    db.close();   
                    return user;
                }
                else {
                    console.log('Wrong password: ' + err);
                }
            } else {
                console.log('User not registered: ' + err);
            } 
        });
            
        
    }
};