var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');
var Location = mongoose.model('Review');

/* GET users listing. */
router.get('/a', function(req, res, next) {
  var location  = new Location();
  location.reviewId = "fdksjafkj";
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
