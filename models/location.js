const mongoose = require('mongoose');
const locationSchema = mongoose.Schema({
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

const location = mongoose.model('User', locationSchema);

module.exports = location;
