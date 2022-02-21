var express = require('express');
const { json } = require('express/lib/response');
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
    res.json(list);
});

module.exports = router;