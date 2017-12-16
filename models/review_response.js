var mongoose = require('mongoose');
var reviewResponseSchema = mongoose.Schema({
	reviewId: String,
	userId: String,
	locationCoOrdinates: String,
	agreeDisagree: String
});

mongoose.model('ReviewRepsonse', reviewSchema);