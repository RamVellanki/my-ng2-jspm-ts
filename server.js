'use strict';

var express = require('express');

var app = express();
var root = '/dist/'
app.use("/", express.static(__dirname+'/dist'));
app.use("/jspm_packages", express.static(__dirname+'/jspm_packages/'));

app.use(express.static(root));


app.get('/', function(req, res) {
  res.sendFile('index.html');
});

if (module === require.main) {
  var server = app.listen(process.env.PORT || 8383, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('App listening at http://%s:%s', host, port);
  });
}

module.exports = app;
