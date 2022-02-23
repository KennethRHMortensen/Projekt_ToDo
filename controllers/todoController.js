const mongoUtil = require("../models/mongoUtil");
const List = require('../models/List');
const User = require("../models/User");
const userController = require("./userController");

module.exports = {
    // Get ALL lists.
    getList: async function(query, sort) {
        const db = await mongoUtil.mongoConnect();
        const lists = await List.find(query, null, sort);
        db.close();
        return lists;
    },
    // Create a list.
    postList: async function(req, res) {
        const user = await userController.getUser({userName: 'kenneth'}) //Find logged in user
        const db = await mongoUtil.mongoConnect();
        let list = new List({
            user: user[0],
            dateStart: new Date(),
            isArchived: req.body.isArchived,
            dateEnd: req.body.dateEnd,
            title: req.body.title,
            description: req.body.description,
            //TODO: Find out how to join list to user.
        });
        List.create(list, function(error, savedDocument) {
            console.log(savedDocument); //TODO: Remove when publishing.
            if (error) console.log(error);
            db.close();
            
        });
    },
    
};
