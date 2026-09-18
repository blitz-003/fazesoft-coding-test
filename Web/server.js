const express = require("express");
const app = express();

const PORT = 3000;

app.use(express.json());

// POST /api/tasks
// Purpose: Create a new task and store it in memory.
// Request Body (JSON):
// title (string, required, cannot be empty or whitespace)
// category (string, required — must be one of: 'work', 'personal', 'study')
// Behavior:
// Automatically generate a unique id (integer or UUID) and set a default status of 'pending'.
// Return HTTP 201 Created with the created task object.
// If validation fails (missing fields, blank title, or invalid category), return HTTP 400 Bad Request with an explanatory error message.
// GET /api/tasks
// Purpose: Retrieve all tasks stored in memory.
// Query Parameters (Optional):
// category (filter tasks by category: work, personal, study)
// Behavior:
// Return HTTP 200 OK with a JSON array of matching tasks.
// If no filter is provided, return all tasks.
// If no tasks match the filter, return an empty array [] with HTTP 200 OK.

const task = [];

let nextId = 1;

const validCategories = ["work", "personal", "study"];

app.post("/api/tasks", (req, res) => {
  const { title, category } = req.body;

  if (typeof title !== "String" || title.trim() == "")
    return res.status(400).json({ error: "Title is requied" });
});
