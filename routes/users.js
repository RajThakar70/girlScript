var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');
var Location = mongoose.model('Location')

/* GET users listing. */
router.get('/a', function(req, res, next) {
  var location  = new Location();

  location.locationCoordinates = "String"
  location.locationName = "String"
  location.city = "String"
  location.country = "String"
  location.state = "String"
  location.zip = 13
  location.locationUpVote = 13
  location.locationDownVote = 13
  location.locationType = "String",
  location.save(function(err, p1) {
        if (err) {
          return res.json({
            error: "Problem in Database. Try Again later."
        });
      }
        res.json(p1)
    });
});

router.get('/b', function(req, res, next) {
  User.find({},(err,data)=>{
    if(err) return err;
    res.json(data);
  })
});


module.exports = router;
