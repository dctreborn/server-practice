var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var port = 3000;

app.use(bodyParser.urlencoded({extended: false}));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "wishes_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);

});

app.get("/", function(req, res){
	connection.query("select * from wishes", function(err, data){
		if (err) throw err;

		res.render("index", {
			wishes: data
		});
	});
});

app.post("/", function(req, res){
	connection.query("insert into wishes (wish) values (?)", [req.body.wish], function(err, result){
		if (err) throw err;

		res.redirect("/");
	});
});

app.listen(port, function(){
	console.log("Listening on port", port);
});