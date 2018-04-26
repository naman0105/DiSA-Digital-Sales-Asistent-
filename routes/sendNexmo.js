var express = require('express');
var router = express.Router();
const Nexmo = require('nexmo');
const nexmo = new Nexmo({
  apiKey: "d0d44879",
  apiSecret: "tTsXxUD2oyFnzamz"
});

const from = 'Nexmo';
const to = '918277561807';
var text = 'text';

var sendSms = function(req,res,next){
    text = req.params.hello;
    console.log(text);
    nexmo.message.sendSms(from, to, text, (error, response) => {
        if(error) {
          throw error;
        } else if(response.messages[0].status != '0') {
          console.error(response);
          throw 'Nexmo returned back a non-zero status';
        } else {
          console.log(response);
        }
      });
}

module.exports = sendSms;

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