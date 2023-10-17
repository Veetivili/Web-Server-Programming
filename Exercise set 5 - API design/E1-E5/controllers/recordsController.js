//const APIError = require('../errors/apierror')
let { Record } = require("../models/Record");

const getRecords = async (req, res) => {
	const { sort, filterYear, fields, title, artist } = req.query;
	const queryObject = {};
  
	if (title) {
		queryObject.title = { $regex: title, $options: "i" };
	}
	if (artist) {
		queryObject.artist = { $regex: artist, $options: "i" };
	}
  
	if (filterYear) {
		const operatorMap = {
			"<": "$lt",
			">": "$gt",
			"<=": "$lte",
			">=": "$gte",
			"=": "$eq",
		};
  
		const regEx = /\b(<|>|<=|>=|=)\b/g;
  
		// Split the filterYear by commas to process multiple filters
		filterYear.split(",").forEach((filter) => {
			const modifiedFilter = filter.replace(regEx, (match) => `-${operatorMap[match]}-`);
			const [field, operator, value] = modifiedFilter.split("-");

			if (!queryObject[field]) {
				queryObject[field] = {};
			}

			// Update the queryObject for the field with the operator and value
			queryObject[field][operator] = Number(value);
		});
	}
  
	let result = Record.find(queryObject);

	if (fields) {
		result.select(fields.split(","));
	}

	if (sort) {
		const sortList = sort.split(",").join(" ");
		result = result.sort(sortList);
	} else {
		result = result.sort("id");
	}

	const records = await result;
	console.log(records);
	throw new Error("This is an error");
	//return res.status(200).json(records);
};
  
const getRecord = async (req, res) => {
	const { id } = req.params;
	const singleRecord = await Record.findById(id);
	return res.status(200).json(singleRecord);
};
  
const createRecord = async (req, res) => {
	const record = await Record.create(req.body);
	res.status(201).json({ success: true, msg: record });
};
  
const updateRecord = async (req, res) => {
	await Record.updateOne({ _id: req.params.id }, req.body);
	res.status(201).json({ success: true });
};
  
const deleteRecord = async (req, res) => {
	await Record.deleteOne({ _id: req.params.id });
	return res.status(200).json({ success: true });
};

module.exports = {
	getRecords,
	getRecord,
	createRecord,
	updateRecord,
	deleteRecord,
};
