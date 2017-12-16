var mongoose = require('mongoose');
var reviewSchema = mongoose.Schema({
	reviewId: String,
	userId: String,
	locationCoOrdinates: String,
	reviewAgreeCount: String,
	reviewDisagreeCount: String,
	reviewType: String,
	reviewAuthenticity: String,
});

mongoose.model('Review', reviewSchema);