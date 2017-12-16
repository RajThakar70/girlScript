var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  userId:String
});

mongoose.model('User', userSchema);
