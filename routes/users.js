var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');
const todoController = require('../controllers/todoController');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  
  const users = await userController.getUser({});
  console.log(users);
  const user = await userController.loginUser({});
  console.log(user);
});

// render index page upon signup
// router.get('/signup', async function(req, res, next) {

//   res.render('signup', { title: 'Sign Up' });
// });

// register user in db
router.post('/signup', async function(req, res, next) {
  
  const user = await userController.postUser(req, res);

  res.render('index', { title: 'Signed up' });
});

// render dashboard page upon login
// router.get('/login', function(req, res) {
//   res.render('dashboard',  { title: 'Express' });
// });

// log in user using controller for validating input
router.post('/login', async function(req, res, next) {
  
  let user = await userController.loginUser(req, res);
  let lists = await todoController.getList(req, res);
  console.log(lists);

  res.render('dashboard', { 
    title: 'Express', 
    user: user,
    lists: lists
  });
});

router.get('/admin', async function(req,res, next) {

  const users = await userController.getUser({profile: 'pending'});

  //TODO: Render a list with users, and possiblity to change profile from pending to other options.
  res.render('adminUserPendingList', {title: 'User Administration', users: users });
});

router.post('/updateuser', async function(req,res, next) {



});



module.exports = router;
