'use strict';

function sendsms(params) {

  const accountSid = 'AC7d49ec2637017dc8dc65a69dc6702720';
  const authToken = '04442b881e4d6a776197323c9b7636f9';
  const client = require('twilio')(accountSid, authToken);
  
  client.messages
    .create({
       body: 'Sample Message',
       from: '+17348233523',
       to: '+919910707226'
     })
    .then(message => console.log(message.sid));
}

exports.sendsms = sendsms;
