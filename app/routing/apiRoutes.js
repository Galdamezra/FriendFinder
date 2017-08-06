var friendData = require ('../data/friend');

module.exports = function (app) {

  app.get('/api/friends', function (req, res) {
    res.json(friendData);
  });

  app.post('/api/friends', function (req, res) {
    if(friendData.length < 10) {
      friendData.push(req.body);
      res.json(true);
    } else {
      res.json(false);
    }
  });

//convert users results into simple array
//compare difference between users to calculate difference


}
