var express = require('express');
var router = express.Router();
var openurl = require('openurl');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', open: 'camara' });
});

router.get('/test', function(req, res, next) {
  res.render('test', { title: 'Express', open: 'camara' });
});

router.get('/authorize',function(req, res, next){
  openurl.open("http://localhost:3000/test");
})

router.get('/gettickets', function(req, res, next){
  res.render('getTickets');
})

module.exports = router;
