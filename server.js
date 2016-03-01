// server.js

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
var port = process.env.PORT || 8080;
var router = express.Router();

// Router base path
router.get('/', function(req, res) {
  res.json({
    welcome: 'Tech Mahindra'
  });
});
// prefix all routes with techmahindra
app.use('/techmahindra', router);
// set the static files location /src
app.use(express.static(__dirname + '/'));
// Boot the express server
app.listen(port);
console.log('techmahindra server started on port ' + port);
