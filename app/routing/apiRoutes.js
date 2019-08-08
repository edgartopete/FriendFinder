var path = require("path");
var friendsData = require("../data/friends.js");
var financialData = require("../data/fin.js");


module.exports = function (app) {

  // Displays a single character, or returns false
  app.get("/api/friends", function (req, res) {
    res.json(financialData);
  });

  app.get("/api/fin", function (req, res) {
    res.json(financialData);
  });

  // Create New frind - takes in JSON input
  app.post("/api/friends", function (req, res) {

    var difference = 40;
    var name = '';
    var photo = '';
    var newFriend = req.body;

    friendsData.forEach(function (friends) {
      
      var matchedScores = [];
      var totalDifference = 40;
      
      function getsum(total, num) {
        return total + num;
      }

      for (var i = 0; i < friends.scores.length; i++) {
        matchedScores.push(Math.abs(parseInt(newFriend.scores[i]) - parseInt(friends.scores[i])));
      }

      totalDifference = matchedScores.reduce(getsum);

      if (totalDifference < difference) {
        
        difference = totalDifference;
        name = friends.name;
        photo = friends.photo;
      }
    });

    res.json({
      name: name,
      photo: photo
    });

    friendsData.push(newFriend);


  });

};
