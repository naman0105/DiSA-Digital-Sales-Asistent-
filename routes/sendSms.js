var express = require('express');
var router = express.Router();
// const Nexmo = require('nexmo');
// const nexmo = new Nexmo({
//   apiKey: "d0d44879",
//   apiSecret: "tTsXxUD2oyFnzamz"
// });

// const from = 'Nexmo';
// const to = '917760620783';
// const text = 'A text message sent using the Nexmo SMS API';

// nexmo.message.sendSms(from, to, text, (error, response) => {
//   if(error) {
//     throw error;
//   } else if(response.messages[0].status != '0') {
//     console.error(response);
//     throw 'Nexmo returned back a non-zero status';
//   } else {
//     console.log(response  + "successful");
//   }
// });



// function smssend(){
//     const from = 'Acme Inc'
//     const to = "917760620783"
//     const text = 'A text message sent using the Nexmo SMS API'

//     nexmo.message.sendSms(from, to, text);
//     // nexmo.message.sendSms(
//     //     YOUR_VIRTUAL_NUMBER, '917760620783', 'yo',
//     //         (err, responseData) => {
//     //             if (err) {
//     //                 console.log(err);
//     //             } else {
//     //                 console.dir(responseData);
//     //             }
//     //         }
//     // );
// }

var twilio = require('twilio');

var accountSid = 'ACa460774f30c8a6a76a6be368c6002518'; // Your Account SID from www.twilio.com/console
var authToken = 'eea2599c3a3a3e74a8c96d2def0e9718';   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

var smsFunc = function(req,res){
    var text = req.params.hello;
    console.log("hello this is naman" + text);
    client.messages.create({
        body: text,
        to: '+918277561807',  // Text this number
        from: '+14846528693' // From a valid Twilio number
    })
    .then((message) => console.log(message.sid));
}

module.exports = smsFunc;