const mongoUtil = require("../models/mongoUtil");
const List = require('../models/List');

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
        const db = await mongoUtil.mongoConnect();
        let list = new List({
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
