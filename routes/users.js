var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  
  const users = await userController.getUser({});
  console.log(users);
  const user = await userController.loginUser({});
  console.log(user);
});

// render index page upon signup
router.get('/signup', async function(req, res, next) {

  res.render('signup', { title: 'Sign Up' });
});

// register user in db
router.post('/signup', async function(req, res, next) {
  
  const user = await userController.postUser(req, res);

  res.render('login', { title: 'Signed up' });
});

// render dashboard page upon login
router.get('/login', function(req, res) {
  res.render('dashboard',  { title: 'Express' });
});

// log in user using controller for validating input
router.post('/login', async function(req, res, next) {
  
  let user = await userController.loginUser(req, res);

  res.render('index', { title: 'Express', user: user });
});



module.exports = router;
