const mongoose = require("mongoose");
// make sure connection goes back to CONFIG VARIABLE set up in HEROKU
// MONGODB_URI is the CONFIG VARIABLE
const MONGODB_URI =
    process.env.MONGODB_URI || "mongodb://localhost/googlebooks";

mongoose
    .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})
.then(() => console.log("you are connected to mongodb"))
.catch((err) => console.log(err));

module.exports = mongoose;
