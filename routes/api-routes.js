const express = require("express");
const router = express.Router();
const db = require("../models");

// return saved books
router.get("/api/books", (req, res) => {
    db.Books.find().then((books) => res.send(books));
});

// post saved book
router.post("/api/books", (req, res) => {
    db.Books.create({ title: req.body.title }).then((books) => res.send(books));
});

router.delete("/api/books/:id", (req, res) => {
    db.Books.findByIdAndRemove(req.params.id).then (() => res.send("deleted"));
});

module.exports = router;