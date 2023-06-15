const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const TaskModel = require("./models/Tasks");

const app = express();
app.use(cors());
app.use(express.json());

const MONGODB_URL = process.env.MONGODB_URL;

mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Atlas connected'))
  .catch((err) => console.log('Error connecting to MongoDB Atlas', err));

app.get("/", (req, res) => {
  TaskModel.find({})
    .then(task => res.json(task))
    .catch(err => res.status(500).json({ message: "Error retrieving tasks", error: err }));
});

app.post("/createTask", (req, res) => {
  const { title, description, status } = req.body;

  if (!title || !description || !status) {
    return res.status(400).json({ message: "All fields are required" });
  }

  TaskModel.create({ title, description, status })
    .then(task => res.json(task))
    .catch(err => res.status(500).json({ message: "Error creating task", error: err }));
});

app.get("/gettask/:id", (req, res) => {
  const id = req.params.id;

  TaskModel.findById({ _id: id })
    .then(task => res.json(task))
    .catch(err => res.status(500).json({ message: "Error retrieving task", error: err }));
});

app.put("/updatetask/:id", (req, res) => {
  const id = req.params.id;
  const { title, description, status } = req.body;

  if (!title || !description || !status) {
    return res.status(400).json({ message: "All fields are required" });
  }

  TaskModel.findByIdAndUpdate({ _id: id }, { title, description, status }, { new: true })
    .then(task => res.json(task))
    .catch(err => res.status(500).json({ message: "Error updating task", error: err }));
});

app.delete("/deletetask/:id", (req, res) => {
  const id = req.params.id;

  TaskModel.findByIdAndDelete({ _id: id })
    .then(result => {
      if (!result) {
        return res.status(404).json({ message: "Task not found" });
      }
      res.json({ message: "Task deleted successfully", data: result });
    })
    .catch(err => res.status(500).json({ message: "Error deleting task", error: err }));
});

app.listen(3001, () => {
  console.log("Server is Running!");
});