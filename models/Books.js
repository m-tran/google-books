const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BooksSchema = new Schema({
    title: {
        type: String,
        required: "String is required"
    },
    author: {
        type: String,
        required: "String is required"
    },
    ISBNS: [{
        isbn10: {
            type: String
        },
        isbn13: {
            type: String
        }
    }]
});

const Books = mongoose.model("Books", BooksSchema);

module.exports = Books;
