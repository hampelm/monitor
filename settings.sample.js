module.exports = {
  TWILIO_ACCOUNT_SID: '',
  TWILIO_TOKEN: '',
  TWILIO_FROM: '+1',

  checks: [{
    url: 'https://google.com',
    title:'Google'
  }],

  responders: [{
    name: "Matt",
    to: "+17348465010"
  }]
};
