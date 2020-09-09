const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BooksSchema = new Schema({
        
    }
});

const Books = mongoose.model("Books", BooksSchema);

module.exports = Books;
