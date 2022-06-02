const createServer = require('./server');

const app = createServer()

// init project
require('dotenv').config();

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
