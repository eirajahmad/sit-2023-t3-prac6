var express = require("express");
var app = express();
var cors = require("cors");
let dbConnect = require("./dbConnect");
let projectRoutes = require("./routes/projectRoutes");
// let projectCollection;

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({
	extended: false
}));
app.use(cors());
app.use("/api/projects", projectRoutes);
app.get("/addTwoNumbers/:firstNumber/:secondNumber", function(req, res, next) {
	var firstNumber = parseInt(req.params.firstNumber);
	var secondNumber = parseInt(req.params.secondNumber);
	var result = firstNumber + secondNumber || null;
	if (result == null) {
		res.json({
			result: result,
			statusCode: 400
		}).status(400);
	} else {
		res.json({
			result: result,
			statusCode: 200
		}).status(200);
	}
});
app.get("/substractTwoNumbers/:firstNumber/:secondNumber",
	function(req, res, next) {
		var firstNumber = parseInt(req.params.firstNumber);
		var secondNumber = parseInt(req.params.secondNumber);
		var result = firstNumber - secondNumber || null;
		if (result == null) {
			res.json({
				result: result,
				statusCode: 400
			}).status(400);
		} else {
			res.json({
				result: result,
				statusCode: 200
			}).status(200);
		}
	}
);
app.get("/multiplyTwoNumbers/:firstNumber/:secondNumber",
	function(req, res, next) {
		var firstNumber = parseInt(req.params.firstNumber);
		var secondNumber = parseInt(req.params.secondNumber);
		var result = firstNumber * secondNumber || null;
		if (result == null) {
			res.json({
				result: result,
				statusCode: 400
			}).status(400);
		} else {
			res.json({
				result: result,
				statusCode: 200
			}).status(200);
		}
	}
);
app.get("/divideTwoNumbers/:firstNumber/:secondNumber",
	function(req, res, next) {
		var firstNumber = parseInt(req.params.firstNumber);
		var secondNumber = parseInt(req.params.secondNumber);
		var result = firstNumber / secondNumber || null;
		if (result == null) {
			res.json({
				result: result,
				statusCode: 400
			}).status(400);
		} else {
			res.json({
				result: result,
				statusCode: 200
			}).status(200);
		}
	}
);




var port = process.env.port || 8080;
app.listen(port, () => {
	console.log("App listening to http://localhost:" + port);
	//createCollection('Pets')
});