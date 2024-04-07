const express = require("express");
const cors = require("cors");
const Jwt = require("jsonwebtoken");
const Department = require("./db/Dept");
require("./db/config");

const app = express();
app.use(express.json());
app.use(cors());

//Get department
app.get("/department", async (req, resp) => {
	let data = await Department.find();
	if (data) {
		resp.send(data);
	} else {
		resp.send("Not Data Available");
	}
});

//Delete  department
app.delete("/department/:id", async (req, resp) => {
	let data = await Department.deleteOne({
		_id: req.params.id,
	});
	if (data) {
		resp.send(data);
	} else {
		resp.sendStatus(404).send("No Record Found");
	}
});

//inset department
app.post("/department", async (req, resp) => {
	let data = new Department(req.body);
	let result = await data.save();
	resp.send(result);
});

//Update  department
app.put("/department/:id", async (req, resp) => {
	let data = await Department.updateOne(
		{
			_id: req.params.id,
		},
		{ $set: { deptName: req.body.deptName } }
	);
	if (data) {
		resp.send(data);
	} else {
		resp.send(404).send("No such record found");
	}
});
app.listen(3000);
