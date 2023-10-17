require("express-async-errors");
require("dotenv").config();
const { PORT, MONGO_URI } = process.env;

const express = require("express");
const app = express();
app.use(express.json());

const connectMongoDB = require("./database/mongodb");
const { checkUsername } = require("./middleware/auth");
const records = require("./routes/records");

//const notFoundMiddleware = require('./middleware/not-found')
//const errorHandlerMiddleware= require('./middleware/error-handler')

app.use("/api", checkUsername);
app.use("/api/records", records);
app.use(express.static("public"));

// Global error handler after routes
app.use((err, req, res, next) => {
	console.log(err);
	return res.status(500).json({ msg: "There was an error!" });
});

//app.use(errorHandlerMiddleware);
//app.use(notFoundMiddleware);



const start = async () => {
	console.log(MONGO_URI);
	try {
		await connectMongoDB(MONGO_URI);
		app.listen(PORT, () => {
			console.log(`server is listening on port ${PORT}...`);
		});
	} catch (error) {
		console.error(error);
	}
};

start();