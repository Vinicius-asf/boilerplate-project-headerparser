// init project
var express = require('express');
const apiRouter = require('./src/modules')

var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');

const createServer = () => {
  app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204
  
  // http://expressjs.com/en/starter/static-files.html
  app.use(express.static('public'));
  
  // http://expressjs.com/en/starter/basic-routing.html
  app.get("/", function (req, res) {
    res.sendFile(__dirname + '/views/index.html');
  });
  
  app.use('/api',apiRouter)
  return app;
}

module.exports = createServer;
