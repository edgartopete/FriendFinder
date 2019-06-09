var path = require("path");
var friendsData = require("../data/friends.js");


module.exports = function (app) {

  // Displays a single character, or returns false
  app.get("/api/friends", function (req, res) {
    res.json(friendsData);
  });

  // Create New Characters - takes in JSON input
  // app.post("/api/friends", function(req, res) {
  //     // req.body hosts is equal to the JSON post sent from the user
  //     // This works because of our body parsing middleware
  //     var newcharacter = req.body;

  //     // Using a RegEx Pattern to remove spaces from newCharacter
  //     // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  //     newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

  //     console.log(newcharacter);

  //     characters.push(newcharacter);

  //     res.json(newcharacter);
  //   });

};