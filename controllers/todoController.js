const mongoUtil = require("../models/mongoUtil");
const List = require('../models/List');
const User = require("../models/User");
const userController = require("./userController");
const Task = require ('../models/Task');

module.exports = {
    
    // Get ALL lists.
    getList: async function(query, sort) {
        const db = await mongoUtil.mongoConnect();
        const lists = await List.find(query, null, sort);
        //.populate('task');
        db.close();
        return lists;
    },

    // Create a list.
    postList: async function(req, res) {
        const user = await userController.getUser({userName: 'kenneth'}) //Find logged in user
        const db = await mongoUtil.mongoConnect();
       
        let list = new List({
            dateStart: new Date(),
            isArchived: false,
            dateEnd: req.body.dateEnd,
            title: req.body.title,
            description: req.body.description,
            user: user[0]
            //TODO: Find out how to join list to user.
        });
        console.log(list);
        
        List.create(list, function(error, savedDocument) {
            console.log(savedDocument); //TODO: Remove when publishing.
            if (error) console.log(error);
            db.close();
            console.log('db open');
            return user;
            
        });
    },

    // Create task
    postTask: async function(req, res) {
        const list = await this.getList({_id: "62163b98a08ab3c82fd32518"}) //Find list
        const db = await mongoUtil.mongoConnect();
        let task = new Task({
            title: req.body.title,
            description: req.body.description,
            isCompleted: false,
            dateStart: new Date(),
            dateDeadline: req.body.deadline,
            isArchived: false,
            list: list[0]
        });

        Task.create(task, function(error, task) {
            console.log(task);
            if (task) {
                List.update(
                    { _id: list._id }, 
                    { $push: { tasks: task } },
                    console.log('done'),
                    console.log(list)
                );
            } else {
                console.log(error);
            }
            db.close();
        });
    },
    
};
