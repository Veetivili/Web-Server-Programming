const mongoose = require("mongoose");

const currentYear = new Date().getFullYear();

const RecordSchema = mongoose.Schema(
	{
		id: String,
		artist: { type: String, required: [true, "Artist name is required"]},
		title: { type: String, required: [true, "Artist title is required"]},
		year: {
			type: Number,
			required: [true, "Release Year is required"],
			min: [1900, "year must be atleast 1900"],
			max: [currentYear, `Year cannot be later than ${currentYear}`]},
		genre: String,
		tracks: { type: Number,
			required: [true, "Track count is required and must be atleast 1"],
			min: [1, "Track count is required and must be atleast 1"]}

	},
	{
		versionKey: false,
	}
);

const Record = mongoose.model("Albums", RecordSchema, "album_collection");

module.exports = {
	Record,
};