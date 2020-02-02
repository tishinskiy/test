var express = require('express');
var app = express();
var path = require('path');

app.get('/', function (req, res) {
	// res.send('Hello World!');
	res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.use('/assets', express.static(__dirname + '/public/assets/'));

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});