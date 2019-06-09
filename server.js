// Dependencies
var express = require("express");
var path = require("path");
var serveStatic = require('serve-static');

// Sets up the Express App
var app = express();
//var PORT = 3000;
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'app/public')));

require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

// LISTENER
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
