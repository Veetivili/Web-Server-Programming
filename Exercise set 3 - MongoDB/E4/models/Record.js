const mongoose = require("mongoose");

const RecordSchema = mongoose.Schema(
    {
        id: String,
        artist: String,
        title: String,
        year: Number,
        genre: String,
        tracks: Number

    },
    {
        versionKey: false,
    }
);

const Record = mongoose.model("Albums", RecordSchema, "album_collection");

module.exports = {
    Record,
};