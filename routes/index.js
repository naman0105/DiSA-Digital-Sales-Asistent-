var express = require('express');
var router = express.Router();
var openurl = require('openurl');
var bodyParser = require('body-parser');
var fs = require("fs");
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })) 

// var smsModule = require('./sendSms');

var ticketContent;
var ticketContentGeneral;
var ticketContentDeals;
var ticketContentLast;
var text;

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

router.get('/newticket', function(req, res, next){
  res.render('newTicket', {ticket:ticketContent, ticketgeneral:ticketContentGeneral, ticketdeals:ticketContentDeals, ticketlast: ticketContentLast, text:text});
})

router.get('/userInterest', function(req, res, next){
  var str = JSON.stringify(req.query);
  console.log(str);
  console.log(req.query.name);
  var name = req.query.name;
  var data = fs.readFileSync(__dirname + "/" + "../customerDetails.json");
  console.log("datafromfile : "+data);
  var data1 = JSON.parse(data);
  console.log(data1.length);
  for(var i=0;i<data1.length;i++){
    console.log(data1[i].name);
    if(data1[i].name == name){
      var lastbuy = data1[i].lastBuy;
      var oftenbuy = data1[i].oftenBuy;
      var general = data1[i].generalIntrest;
      var deals = data1[i].deals;

        text = name + " has entered the store. He is a platinum customer. He likes "+ general + "  last bought "+ lastbuy + " and often buys " + oftenbuy;
        ticketContent = "hi "+name + ". How are you doing this fine day?";
        ticketContentGeneral = "you have an interest in "+general+". Why dont you try the 2nd aisle in the left section";
        ticketContentDeals = name + " we have the following special deals for you. " + deals;
        ticketContentLast = name + " you last bought " + lastbuy + " you can find it in the 6th aisle, go straight and take a right.";
    }
  }
  res.redirect('newticket');
})


router.use('/sms/:hello',require('./sendSms'));

router.use('/smsnexmo/:hello',require('./sendNexmo'))

module.exports = router;
