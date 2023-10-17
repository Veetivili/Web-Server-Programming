// Utility to wipe and import fresh data into the database
require("dotenv").config();
const { MONGO_URI } = process.env;

const connectMongoDB = require("./database/mongodb");
const { Record } = require("./models/Record");

const mockRecords = require("./mockRecords.json");

const insertData = async () => {
	try {
		await connectMongoDB(MONGO_URI);
		// Remove existing data
		await Record.deleteMany();
		// Create the data from json file
		await Record.insertMany(mockRecords);
		console.log("Data inserted successfully");
		process.exit(0);
	} catch(error) {
		console.error(error);
		process.exit(1);
	}
};

insertData();