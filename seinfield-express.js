// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var mysql = require("mysql");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));

var connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "IPDremi22",
        database: "seinfield_db"
    });

var query = "select * from actors"

app.get("/cast", function(req, res){
	connection.query("select * from actors", function(err, results){
		var length = results.length;
		var actors = [];
		for (var i = 0; i < length; i++) {
			actors.push(results[i]);
		}

		return res.json(actors);
	});
});

app.get("/coolness-chart", function(req, res){
	connection.query("select * from actors order by coolness_points desc", function(err, results){
		var length = results.length;
		var actors = [];
		for (var i = 0; i < length; i++) {
			actors.push(results[i]);
		}

		return res.json(actors);
	});
});

app.get("/attitude-chart/:att", function(req, res){
	connection.query("select * from actors where attitude = ?", req.params.att, function(err, results){
		console.log(results);
		res.json(results[0]);
	});
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});