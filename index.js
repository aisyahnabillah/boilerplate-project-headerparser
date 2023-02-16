// index.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint...
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

// Set up a route to return IP address, language, and software information
app.get('/api/whoami', function (req, res) {
  // Get the IP address from the request object
  var ip = req.ip;

  // Get the preferred language from the Accept-Language header in the request
  var language = req.headers['accept-language'];

  // Get the user agent string from the User-Agent header in the request
  var software = req.headers['user-agent'];

  // Create an object to hold the response data
  var responseData = { ipaddress: ip, language: language, software: software };

  // Send the response as JSON
  res.json(responseData);
});

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
