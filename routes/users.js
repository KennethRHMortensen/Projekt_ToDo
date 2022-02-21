var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', function(req, res, next) {
  

  res.render('login', { title: 'Express' });
});

router.get('/login', function(req, res) {
  res.render('login');
});

router.post('/login', async function(req, res, next) {
  
  const user = await userController.loginUser(req, res);

  res.render('index', { user: user.userName });
});



module.exports = router;
