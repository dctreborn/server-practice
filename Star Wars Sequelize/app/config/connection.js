// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize
var sequelize = new Sequelize("sequelize_library", "root", "password", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

// Exports the connection for other files to use
module.exports = sequelize;

// // Requiring mysql package
// var mysql = require("mysql");

// // Setting up our connection information
// var source = {
//   localhost: {
//     port: 3306,
//     host: "localhost",
//     user: "root",
//     password: "password",
//     database: "starwars"
//   }
// };


// // Creating our connection
// var connection = mysql.createConnection(source.localhost);


// // Connecting to the database.
// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

// // Exporting our connection
// module.exports = connection;
