const mongoose = require("mongoose");

const deptSchema = new mongoose.Schema({
	deptName: String,
	createdDate: Date,
});
module.exports = mongoose.model("department", deptSchema);
