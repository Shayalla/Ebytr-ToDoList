const Joi = require('joi');
const tasksModel = require('../models/tasksModel');

const isValid = (task, status) => {
  const tasks = Joi.object({
    task: Joi.string().required(),
    status: Joi.string().required(),
  });
  const { message } = tasks.validate({ task, status }).error.details[0];
  return message;
};

const findAllTasks = async () => {
  const find = await tasksModel.findAll();
  return find;
};

const createTask = async (task, status) => {
  const err = await isValid(task, status);
  if (err) return { err, error: true };

  await tasksModel.addTasks(task, status);
  return { task, status };
};

const updateTask = async (id, task, status) => {
  await tasksModel.updateTask(id, task, status);
  const find = await tasksModel.findById(id);
  return find;
};

const deleteTask = async (id) => {
  await tasksModel.deleteTask(id);
  const message = 'Deletado com sucesso';
  return message;
};

module.exports = {
  createTask,
  findAllTasks,
  updateTask,
  deleteTask,
};