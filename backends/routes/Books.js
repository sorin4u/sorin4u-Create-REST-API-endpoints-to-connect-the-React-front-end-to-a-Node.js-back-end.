const express = require("express");
const { v4: uuidv4 } = require("uuid");
const router = express.Router();

// In-memory storage for books
let ALL_BOOKS = [
  {
    id: uuidv4(),
    title: "JavaScript For Dummies",
    start: new Date(2021, 10, 1).toISOString(),
    end: new Date(2021, 10, 5).toISOString(),
  },
];

/**
 * Feature 1: Getting a list of books
 */
router.get("/", (req, res) => {
  res.json(ALL_BOOKS);
});

/**
 * Feature 2: Getting a specific book
 */
router.get("/:id", (req, res) => {
  const { id } = req.params;

  const book = ALL_BOOKS.find((book) => book.id === id);

  if (!book) {
    return res.status(404).json({ error: "Book not found" });
  }

  res.json(book);
});

/**
 * Feature 3: Adding a new book
 */
router.post("/", (req, res) => {
  const { title, start, end } = req.body;

  if (!title || !start || !end) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const newBook = {
    id: uuidv4(),
    title,
    start: new Date(start),
    end: new Date(end),
  };

  ALL_BOOKS.push(newBook);

  res.status(201).json(newBook);
});

/**
 * Feature 4: Deleting a book
 */
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  const initialLength = ALL_BOOKS.length;
  ALL_BOOKS = ALL_BOOKS.filter((book) => book.id !== id);

  if (ALL_BOOKS.length === initialLength) {
    return res.status(404).json({ error: "Book not found" });
  }

  res.status(200).json({ message: "Book deleted successfully" });
});

/**
 * Feature 5: Updating a book
 */
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { newTitle, newStart, newEnd } = req.body;

  const book = ALL_BOOKS.find((book) => book.id === id);

  if (!book) {
    return res.status(404).json({ error: "Book not found" });
  }

  if (newTitle) book.title = newTitle;
  if (newStart) book.start = new Date(newStart);
  if (newEnd) book.end = new Date(newEnd);

  res.status(200).json({ message: "Book updated successfully", book });
});

module.exports = router;