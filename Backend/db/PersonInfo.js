const mongoose = require("mongoose");

const personInfoSchema = new mongoose.Schema({
	name: String,
	age: Number,
	birthDate: Date,
	address: String,
	stateId: String,
	cityId: String,
	PhotoImage: String,
	createdDate: Date,
});

module.exports = mongoose.model("Person", personInfoSchema);
