const express = require("express");
const router = express.Router();
const db = require("../models");

// return saved books
router.get("/api/books", (req, res) => {
    db.Books.find({}).then((books) => res.json(books));
});

// post saved book
router.post("/api/books", (req, res) => {
    db.Books.create({ 
        title: req.body.title,
        authors: req.body.author,
        description: req.body.description,
        image: req.body.image,
        link: req.body.link
    }).then(() => res.json(req.body));
});

router.delete("/api/books/:id", (req, res) => {
    db.Books.findByIdAndRemove(req.params.id).then (() => res.send("deleted"));
});

module.exports = router;