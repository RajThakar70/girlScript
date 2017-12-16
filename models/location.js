var mongoose = require('mongoose');
var locationSchema = mongoose.Schema({
  locationCoordinates: String,
  locationName: String,
  city: String,
  country: String,
  state: String,
  zip: Number,
  locationUpVote: Number,
  locationDownVote: Number,
  locationType: String,
});

mongoose.model('Location', locationSchema);
