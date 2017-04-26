// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");


// Routes
// =============================================================
module.exports = function(app) {}

  // Get all chirps
  app.get("/api", function(req, res){
  	connection.query("select * from chirps", function(err, results){
  		if (err) throw err;

  		res.json(results);
  	});
  });

  // Add a chirp
  app.post("/api/new", function(req, res){


  	connection.query("insert into chirps (author, chirp) values (?, ?)", [req.body.author, req.body.chirp], function(err, results){
  		if (err) throw err;

  		//res.redirect("/");
  		res.end();
  	});
  });

  app.get("/", function(req, res){
  	 res.sendFile(path.join(__dirname, "/../public/tables.html"));
  });

};
