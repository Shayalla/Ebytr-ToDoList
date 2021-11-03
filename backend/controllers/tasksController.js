const tasksService = require('../services/tasksService');

const findTasks = async (_req, res) => {
  const find = await tasksService.findAllTasks();
  return res.status(200).json(find);
};

const createTask = async (req, res) => {
  const { task, done } = req.body;

  const create = await tasksService.createTask(task, done);
  if (create.error) return res.status(400).json({ message: create.err });
  return res.status(200).json(create);
};

module.exports = {
  findTasks,
  createTask,
};