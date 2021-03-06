var express = require('express');
var router = express.Router();
const todoController = require('../controllers/todoController');

//Get ALL lists.
router.get('/', async (req, res) => {
    const lists = await todoController.getList({});
    res.status(200).json(lists);
});

// Create a list.
router.post('/', async (req, res) => {
    const list = await todoController.postList(req, res);
    let updateLists = await todoController.getList(req, res);
    
    res.render('dashboard', { 
    title: 'Express', 
    user: list,
    lists: updateLists
  });
  console.log('her er jeg');
});

// Print as json.
router.post('/list/json', async (req, res) => {
    const list = await todoController.postList(req, res);
    res.json(list);
});

// Create a task.
router.post('/task', async (req, res) => {
    const task = await todoController.postTask(req, res);
    res.json(task);
});

module.exports = router;