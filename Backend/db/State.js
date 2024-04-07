const mongoose = require("mongoose");

const stateSchema = new mongoose.Schema({
	stateId: String,
	stateName: String,
	createdDate: Date,
});

module.exports = mongoose.model("State", stateSchema);
