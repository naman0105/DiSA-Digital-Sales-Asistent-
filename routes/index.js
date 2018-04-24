var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/test', function(req, res, next) {
  res.render('test', { title: 'Express', open: "dummy" });
});

router.get('/:motion', function(req,res,next){
  var str = req.query.motion;
  res.render('index', { title: 'Express', open: 'camara'});
})


module.exports = router;
