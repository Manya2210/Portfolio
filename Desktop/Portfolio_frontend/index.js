require("dotenv").config();
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static(__dirname +'/',{ index: 'index.html' }));

const port = process.env.PORT || 6001;
app.listen(port, function () {
  console.log('Migration Cockpit Tool listening on port ' + port);
});