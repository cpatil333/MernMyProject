const mongoose = require("mongoose");

const citySchema = new mongoose.Schema({
	cityName: String,
	stateId: String,
	createdDate: Date,
});

module.exports = mongoose.model("City", citySchema);
