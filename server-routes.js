var url = require("url");
var http = require("http");
var fs = require("fs");

var port = 8080;

var server = http.createServer(handleRequest);

server.listen(port, function() {
	console.log("Server listening on http://localhost:%s", port);
});

function handleRequest(req, res) {
	var urlParts = url.parse(req.url);
	var file = "";

	switch (urlParts.pathname) {
		case "/":
			file = "index.html";
			break;
		case "/food":
			file = "food.html";
			break;
		case "/movies":
			file = "movies.html";
			break;
		case "/css":
			file = "css.html";
			break;
		case "/video-games":
			file = "vg.html";
			break;
		default:
			display404(urlParts.pathname, req, res);
	}

	read(file, res);
}

function read(file, res) {
	fs.readFile(file, function(err, data){

		res.writeHead(200, {"Content-Type": "text/html"});
		res.end(data);
	});
}

function display404(url, req, res) {
  res.writeHead(404, {
    "Content-Type": "text/html"
  });
  res.write("<h1>404 Not Found </h1>");
  res.end("The page you were looking for: " + url + " can not be found ");
}
