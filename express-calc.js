// Dependencies
// =============================================================
var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;


// Search for Specific Wait (or all wait) - provides JSON

app.get("/:operation/:num1/:num2", function(req, res) {
  var calc = req.params.operation;
  var num1 = parseInt(req.params.num1);
  var num2 = parseInt(req.params.num2);
  var result;

  switch (calc) {
    case "addition":
      result = num1 + num2;
      break;
    case "subtraction":
     result = num1 - num2;
      break;
    case "multiplication":
     result = num1 * num2;
      break;
    case "division":
      result = num1 / num2;
      break;
    default:
      result = "not here";
  }
        console.log(result);
    //send to page
    res.send(result.toString());
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
