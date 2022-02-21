var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
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
  
  const user = await userController.loginUser(req, res);

  res.render('index', { title: 'Express', user: user.userName });
});



module.exports = router;
