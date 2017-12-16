var mongoose = require('mongoose');
var locationVoteSchema = mongoose.Schema({
	locationCoOrdinates: String,
	userId: String,
	reviewId: String,
	updateDownvote: String
});

mongoose.model('LocationVote', locationVoteSchema);
