const Task = require('../models/Task');

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).send(tasks);
  } catch (err) {
    res.status(400).send(err);
  }
};

const createTask = async (req, res) => {
  try {
    const task = req.body;
    const response = await Task.create(task);
    res.status(201).send(response);
  } catch (err) {
    return res.status(400).send(err);
  }
};

const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.find({ _id: id });
    if (!task) return res.status(404).send('Task not found');
    res.status(200).send(task);
  } catch (err) {
    res.status(400).send(err);
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTask = await Task.updateOne({ _id: id }, req.body);
    res.status(200).send(updatedTask);
  } catch (err) {
    res.status(400).send(err);
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTask = await Task.deleteOne({ _id: id });
    res.status(200).send(deletedTask);
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
};
