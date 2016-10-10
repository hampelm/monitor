var request = require('request');
var settings = require('./settings');

console.log("Using settings", settings);

var twilio = require('twilio')(settings.TWILIO_ACCOUNT_SID, settings.TWILIO_TOKEN);

function handleError(site) {
  console.log("Error with site", site);
  settings.responders.forEach(function(responder) {
    twilio.sendMessage({
      from: settings.TWILIO_FROM,
      to: responder.to,
      body: 'Error loading ' + site.title + ' ' + site.url
    });
  });
}

function check(site) {
  console.log("Checking site", site);
  request(site.url, function (error, response, body) {
    if (error || response.statusCode !== 200) {
      handleError(site);
    }
  });
}

exports.handler = function(event, context) {
  settings.checks.forEach(check);
};

// For testing: 
// settings.checks.forEach(check);
