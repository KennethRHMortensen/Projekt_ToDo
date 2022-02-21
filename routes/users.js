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

router.get('/signup', async function(req, res, next) {

  res.render('signup', { title: 'Sign Up' });
});

router.post('/signup', async function(req, res, next) {
  
  const user = await userController.postUser(req, res);

  res.render('login', { title: 'Signed up' });
});

router.get('/login', function(req, res) {
  res.render('login',  { title: 'Express' });
});

router.post('/login', async function(req, res, next) {
  
  let user = await userController.loginUser(req, res);

  res.render('index', { title: 'Express', user: user });
});

router.get('/admin', async function(req,res, next) {

  const users = await userController.getUser({profile: 'pending'});

  //TODO: Render a list with users, and possiblity to change profile from pending to other options.
  res.render('adminUserPendingList', {title: 'User Administration', users: users });
});

router.post('/updateuser', async function(req,res, next) {



});



module.exports = router;
