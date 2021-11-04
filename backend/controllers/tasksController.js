const tasksService = require('../services/tasksService');

const findTasks = async (_req, res) => {
  const find = await tasksService.findAllTasks();
  return res.status(200).json(find);
};

const createTask = async (req, res) => {
  const { task, status } = req.body;

  const create = await tasksService.createTask(task, status);
  if (create.error) return res.status(400).json({ message: create.err });
  return res.status(201).json(create);
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  const { task, status } = req.body;

  const update = await tasksService.updateTask(id, task, status);
  return res.status(200).json(update);
};

const deleteTask = async (req, res) => {
  const { id } = req.params;

  const message = await tasksService.deleteTask(id);
  return res.status(200).json(message);
};

module.exports = {
  findTasks,
  createTask,
  updateTask,
  deleteTask,
};