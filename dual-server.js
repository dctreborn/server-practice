var http = require("http");
var port1 = 7000; //good
var port2 = 7500; //bad

var server1 = http.createServer(request7000).listen(port1);
var server2 = http.createServer(request7500).listen(port2);

function request7000(request, response) {
	response.end("This is 7000! Good job!");
}

function request7500(request, response) {
	response.end("This is 7500! Your princess is in another castle.");
}